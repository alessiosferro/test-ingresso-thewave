import {PillVariant} from "@/atoms/Pill/Pill.props";
import {SearchBarFilterListItem} from "@/molecules/SearchBar/SearchBar.props";

export const characterStatusVariantMap: Record<string, PillVariant> = {
  alive: "success",
  dead: "error",
  unknown: "dark"
}

export const homepageSearchBarFilters: SearchBarFilterListItem[] = [
  {
    name: "gender",
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" },
      { value: "genderless", label: "genderless" },
      { value: "unknown", label: "unknown" }
    ]
  },
  {
    name: "status",
    options: [
      { value: "alive", label: "alive" },
      { value: "dead", label: "dead" },
      { value: "unknown", label: "unknown" }
    ]
  },
  {
    name: "species",
    options: [
      { value: "human", label: "human" },
      { value: "alien", label: "alien" },
      { value: "mythological creature", label: "mythological creature" },
    ]
  }
]
