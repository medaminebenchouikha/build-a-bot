import { computed, onMounted } from 'vue';
// import parts from '../data/parts';
import { usePartsStore } from '../stores/partsStore';

export default function useSearch(searchTerm) {
  const partsStore = usePartsStore();
  // partsStore.getParts();
  // const allParts = [...parts.heads, ...parts.arms, ...parts.torsos, ...parts.bases];

  const allParts = computed(() => (partsStore.parts
    ? [...partsStore.parts.heads, ...partsStore.parts.arms,
      ...partsStore.parts.torsos, ...partsStore.parts.bases]
    : []));

  const results = computed(() => {
    let searchResults;
    if (!searchTerm.value) searchResults = allParts;
    else {
      const lowerTerm = searchTerm.value.toLowerCase();
      searchResults = allParts.value.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    return [...searchResults];
  });

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results };
}
