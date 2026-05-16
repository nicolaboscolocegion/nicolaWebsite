export const NEXT_PUBLIC_API_POCKETBASE_URL = process.env.NEXT_PUBLIC_API_POCKETBASE_URL ?? 'http://127.0.0.1:8090';

export function normalizePocketBaseFileValue(file: unknown): string | undefined {
  if (!file) return undefined;
  if (typeof file === 'string') return file;
  if (Array.isArray(file)) {
    const first = file[0];
    if (!first) return undefined;
    if (typeof first === 'string') return first;
    if (typeof first === 'object' && first !== null) {
      return (first as any).name ?? (first as any).id ?? undefined;
    }
  }
  if (typeof file === 'object' && file !== null) {
    return (file as any).name ?? (file as any).id ?? undefined;
  }
  return undefined;
}

function resolveImageReferenceId(imageReference: unknown): string | undefined {
  if (!imageReference) return undefined;

  if (typeof imageReference === 'string') {
    return imageReference;
  }

  if (Array.isArray(imageReference)) {
    const first = imageReference.find((item) => typeof item === 'string');
    return first as string | undefined;
  }

  if (typeof imageReference === 'object' && imageReference !== null) {
    if (typeof (imageReference as any).id === 'string') {
      return (imageReference as any).id;
    }
    if (typeof (imageReference as any).file === 'string') {
      return (imageReference as any).file;
    }
  }

  return undefined;
}

export async function fetchPocketBaseImageRecord(imageReference: unknown) {
  const imageId = resolveImageReferenceId(imageReference);
  if (!imageId) return undefined;

  const url = `${NEXT_PUBLIC_API_POCKETBASE_URL}/api/collections/images/records/${imageId}`;

  try {
    const response = await fetch(url, { next: { revalidate: 10 } });
    if (!response.ok) {
      console.warn(`PocketBase image record lookup failed (${response.status}) for ${url}`);
      return undefined;
    }

    const imageData = await response.json();
    return {
      id: imageData.id,
      file: normalizePocketBaseFileValue(imageData.file),
    };
  } catch (error) {
    console.warn(`PocketBase image lookup error for ${url}:`, error);
    return undefined;
  }
}

export async function fetchPocketBaseCollection<T>(collection: string, perPage = 50): Promise<T[]> {
  const url = `${NEXT_PUBLIC_API_POCKETBASE_URL}/api/collections/${collection}/records?perPage=${perPage}`;

  try {
    const response = await fetch(url, { next: { revalidate: 10 } });
    if (!response.ok) {
      console.error(`PocketBase fetch failed (${response.status}) for ${url}`);
      return [];
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    }
    if (Array.isArray(data.items)) {
      return data.items;
    }

    console.warn(`PocketBase fetch returned unexpected shape for ${url}`);
    return [];
  } catch (error) {
    console.error(`PocketBase fetch error for ${url}:`, error);
    return [];
  }
}

export async function fetchPocketBaseCollectionWithImages<T extends { imageID?: unknown }>(collection: string, perPage = 50): Promise<T[]> {
  const records = await fetchPocketBaseCollection<T>(collection, perPage);

  return await Promise.all(records.map(async (record) => {
    const imageRecord = await fetchPocketBaseImageRecord(record.imageID);
    if (!imageRecord) {
      return record;
    }

    return {
      ...record,
      imageID: {
        id: imageRecord.id,
        file: imageRecord.file,
      },
    } as T;
  }));
}
