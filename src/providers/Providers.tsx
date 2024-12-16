import { ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";

type Props = {
    children: ReactNode
}

export function Providers({ children }: Props) {
    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    )
}