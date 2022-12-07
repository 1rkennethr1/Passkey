import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export interface INote {
    id: number;
    note: string;
}
export interface INotes {
    notes: any[][]
}
export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
}

export const useRest = (): [
    (iuser: IUser) => void,
    (note: INote, id: any) => void,
    (config: AxiosRequestConfig<any>) => void,
    INotes | undefined,
    boolean,
    string,
    IUser | undefined
] => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<INotes>();
    const [user, setUser] = useState<IUser>();


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() =>
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            );
    }

    function newUser(iuser: IUser) {
        setLoading(true);
        axios.post("http://hyeumine.com/newuser.php", new URLSearchParams({
            firstname: iuser.firstname,
            lastname: iuser.lastname,
        }))
            .then((response) => {
                setUser(response.data);
                localStorage.setItem("hyeumine-user", JSON.stringify(response.data));
				window.location.reload();
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    
    function newNote(iNote: INote, id: any) {
        setLoading(true);
        axios.post("http://hyeumine.com/newnote.php", new URLSearchParams({
            id: iNote.id.toString(),
            note: iNote.note,
        }))
            .then((e) => {
                console.log(e);
            })
            .catch((e) => 
                console.log(e)
            )
            .finally(() => setLoading(false));
        axios({
            method: "GET",
            url: "http://hyeumine.com/mynotes.php?id=" + id,
        }).then((e) => {
            setData(e.data);    
        });
    }
    return [newUser, newNote, sendRequest, data, loading, error, user ]
};
