export interface FilterItemOption {
  value: string;
  label: string;
}

export interface SearchBarFilterListItem {
  name: string;
  options: FilterItemOption[];
}

export type SearchBarFilterList = SearchBarFilterListItem[];

export interface SearchBarProps {
  name: string;
  isDropdownOpen: boolean;
  onDropdownOpen: () => void;
  filters: SearchBarFilterList;
}
