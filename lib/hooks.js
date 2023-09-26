import { useEffect, useState } from "react";
//creating a custom hook
export default function useIsClient(){ 
const [isClient, setIsClient] = useState(false);
useEffect(() => { setIsClient(true)}, []);
return isClient
}