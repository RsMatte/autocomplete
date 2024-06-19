import { Post } from "../components/autocomplete/types";

const highlightTerm = (term: string, suggestionList: Post[]): Post[] => {
  return suggestionList.map(suggestion => ({
    ...suggestion,
    title: suggestion.title.replace(term, `<strong>${term}</strong>`)
  }));
};

export default highlightTerm;
