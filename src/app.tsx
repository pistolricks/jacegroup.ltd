import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import {twMerge} from "tailwind-merge"
import {ClassValue, clsx} from "clsx";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
