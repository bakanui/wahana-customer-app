import { API_RUTE } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react"
import { IRute } from "../types/rute";

export const useRute = () => {
    const [rute, setRute] = useState<IRute[]>([]);
    const [ruteParams, setRuteParams] = useState<any>({});
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        if (ruteParams) {
            getRute();
        }
    }, [ruteParams]);

    const getRute = async () => {
        setLoading(true);
        try {
            const res = await axios.get<{data:any}>(API_RUTE.RUTE_LIST,
            {
                params: ruteParams
            });
            const result:any = res.data;
            setRute(result.data);
        } catch (err) {
        } finally {
            setLoading(false);
        }
    }
    return [ruteParams, setRuteParams, rute, loading];
}