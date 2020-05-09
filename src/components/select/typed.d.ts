export type SelectProps = {
  list: ListType[];
  value: string;
  selectedOption: (option: string) => void;
  style?: any;
  props?: any;
};

export type ListType = { name: string; icon?: any; path: string };
