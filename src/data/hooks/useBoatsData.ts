import {GET_BOATS} from "../graphql/index";
import { useQuery } from "@apollo/client";

type Props = {
    currentPage: number,
    nameFilter?: string,
}

export const useBoatsData = (props: Props) => {

    const {loading, error, data} = useQuery(GET_BOATS, {
        variables: {
            page: props.currentPage,
            name: `%${props.nameFilter}%`
        },
    });

    return {loading, error, data}
}