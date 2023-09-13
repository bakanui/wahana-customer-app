import { ISearchTiketContext } from "@/components/SearchTiket";
import { API_JADWAL } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";

export const useTiket = () => {
    const [tripType, setTripType] = useState<'one_way' | 'round'>('one_way');
    const [startRoute, setStartRoute] = useState<ISearchTiketContext['startRoute']>({ value: '', label: 'Pilih Dermaga', subtitle: 'Pilih dermaga keberangkatan' });
    const [destinationRoute, setDestinationRoute] = useState<ISearchTiketContext['startRoute']>({ value: '', label: 'Pilih Dermaga',  subtitle: 'Pilih dermaga tujuan'  });
    const [journeyDate, setJourneyDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [passangers, setPassangers] = useState({
        total: 1,
        adult: 1,
        child: 0
    });
    const [params, setParams] = useState<any>({identifier: new Date().getTime()});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [ticketdetail, setTicketdetail] = useState(undefined);

    useEffect(()=> {
        if(params) {
            searchJadwal();
        }
    }, [params.identifier]);

    const searchJadwal = async() => {
        if (!params.dermaga_asal || !params.dermaga_tujuan) {
            return;
        }
        setLoading(true);
        try {
            const res = await axios.get<{data:any}>(API_JADWAL.GET_JADWAL,
            {
                params
            });
            const result:any = res.data;
            console.log(result);
            setData(result.data);
        } catch (err) {
            console.log(err);
            
        } finally {
            setLoading(false);
        }
    }

    return {
        tripType, setTripType, 
        startRoute, setStartRoute, 
        destinationRoute, setDestinationRoute,
        journeyDate, setJourneyDate,
        returnDate, setReturnDate,
        passangers, setPassangers,
        params, setParams,
        ticketdetail, setTicketdetail,
        data,
        loading
    }
}