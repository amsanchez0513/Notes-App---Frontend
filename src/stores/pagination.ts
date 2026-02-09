import { ref } from 'vue';

export const usePagination = () => {
    const page = ref(1);
    const per_page = ref(10);
    const total = ref(0);

    // Reset pagination (optional)
    const reset_pagination = () => {
        page.value = 1;
        per_page.value = 10;
        total.value = 0;
    };

    // Update pagination after fetching data
    const update_pagination = (paginationData: { current_page: number; page: number; per_page: number; total: number }) => {
        page.value = Number(paginationData.page) || Number(paginationData.current_page);
        per_page.value = Number(paginationData.per_page);
        total.value = Number(paginationData.total);
    };

    return {
        page,
        per_page,
        total,
        reset_pagination,
        update_pagination,
    };
};
