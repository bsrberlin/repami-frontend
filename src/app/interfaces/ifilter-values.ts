export interface IFilterValues {
    label: string | undefined;
    value: string | undefined;
    isChildrenSelected?: boolean;
    isMainCategory: boolean;
    children: {
        label: string | undefined, 
        value: string | undefined,
        isAllSelector: boolean;
        isSelected: boolean,
        isLeaf: boolean
    }[]
}
