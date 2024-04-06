'use client';

import Header from "../Header";
import Catalog from "../Icons/Catalog";
import Orders from "../Icons/Orders";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
                <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6.5">
                    <a href="">
                        <img src="https://demo.tailadmin.com/src/images/logo/logo.svg" alt="" />
                    </a>
                </div>
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                        <div>
                            <h3 className="mb-4 ml-4 text-sm font-medium text-slate-50"> Menu </h3>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                <li className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4">
                                    <a href="/orders" className="flex items-center items-center gap-3">
                                        <Orders /> Ordenes
                                    </a>
                                </li>
                                <li className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4">
                                    <a href="/products" className="flex items-center items-center gap-3">
                                        <Catalog /> Catalogo
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
                    <Header />
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}