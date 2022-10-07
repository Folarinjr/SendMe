import {  createContext, ReactNode, useContext,useState } from "react";


const SendMeContext = createContext<any>({orderItems: []});

const SendMeProvider = ({children}: {children: ReactNode}) => {
    const [orderItems, setOrderItems] = useState<{ id: number; name: string; price: number }[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [delivery, setDelivery] = useState<number>(300);
    //eslint-disable-next-line
    return (
        <SendMeContext.Provider value={{orderItems,setOrderItems,total,setTotal,delivery}}>
            {children}
        </SendMeContext.Provider>
    )
}

export {SendMeContext, SendMeProvider}

