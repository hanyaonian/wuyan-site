import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css";

// @ts-ignore
export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
