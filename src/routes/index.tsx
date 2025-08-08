'use client'

import {createSignal, For} from 'solid-js'
import {arrowPath, chevronRight, cloudArrowUp, lockClosed, server, stop,} from "solid-heroicons/solid";
import {bars_3, xMark} from "solid-heroicons/outline";
import {Icon} from 'solid-heroicons';
import Dialog from "@corvu/dialog";
import {A} from '@solidjs/router';
import {cn} from "~/app";



const navigation = [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
]
const primaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: cloudArrowUp,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: lockClosed,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: server,
    },
]
const secondaryFeatures = [
    {
        name: 'Digital Foundation',
        description:
            'We build robust software solutions that form the backbone of your operations, from streamlining internal processes to creating seamless customer experiences.',
        href: '#',
        icon: cloudArrowUp,
    },
    {
        name: 'Brand Identity',
        description:
            'We craft compelling brand narratives and visual identities that resonate with your target audience, building trust and loyalty.',
        href: '#',
        icon: lockClosed,
    },
    {
        name: 'Product Innovation',
        description:
            'We develop innovative and market-ready products, turning your ideas into tangible, high-quality offerings for both retail and B2B markets.',
        href: '#',
        icon: arrowPath,
    },
]
const featuredTestimonial = {
    body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
    author: {
        name: 'Brenna Goyette',
        handle: 'brennagoyette',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
        logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
    },
}
const testimonials = [
    [
        [
            {
                body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
                author: {
                    name: 'Leslie Alexander',
                    handle: 'lesliealexander',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.',
                author: {
                    name: 'Michael Foster',
                    handle: 'michaelfoster',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.',
                author: {
                    name: 'Dries Vincent',
                    handle: 'driesvincent',
                    imageUrl:
                        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
        ],
        [
            {
                body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
                author: {
                    name: 'Lindsay Walton',
                    handle: 'lindsaywalton',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
                author: {
                    name: 'Courtney Henry',
                    handle: 'courtneyhenry',
                    imageUrl:
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
        ],
    ],
    [
        [
            {
                body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
                author: {
                    name: 'Tom Cook',
                    handle: 'tomcook',
                    imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
                author: {
                    name: 'Whitney Francis',
                    handle: 'whitneyfrancis',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
        ],
        [
            {
                body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
                author: {
                    name: 'Leonard Krasner',
                    handle: 'leonardkrasner',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.',
                author: {
                    name: 'Floyd Miles',
                    handle: 'floydmiles',
                    imageUrl:
                        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            {
                body: 'Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.',
                author: {
                    name: 'Emily Selman',
                    handle: 'emilyselman',
                    imageUrl:
                        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
        ],
    ],
]
const footerNavigation = {
    solutions: [
        {name: 'Marketing', href: '#'},
        {name: 'Analytics', href: '#'},
        {name: 'Automation', href: '#'},
        {name: 'Commerce', href: '#'},
        {name: 'Insights', href: '#'},
    ],
    support: [
        {name: 'Submit ticket', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
    ],
    legal: [
        {name: 'Terms of service', href: '#'},
        {name: 'Privacy policy', href: '#'},
        {name: 'License', href: '#'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: {
                path: stop,
                className: 'text-gray-400 size-6',
            }
        },
        {
            name: 'Instagram',
            href: '#',
            icon: {
                path: stop,
                className: 'text-gray-400 size-6',
            }
        },
        {
            name: 'X',
            href: '#',
            icon: {
                path: stop,
                className: 'text-gray-400 size-6',
            }
        },
        {
            name: 'GitHub',
            href: '#',
            icon: {
                path: stop,
                className: 'text-gray-400 size-6',
            }
        },
        {
            name: 'YouTube',
            href: '#',
            icon: {
                path: stop,
                className: 'text-gray-400 size-6',
            }
        },
    ],
}


export default function Main() {
    const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false)

    return (
        <div class="bg-white">
            {/* Header */}
            <header class="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
                    <div class="flex lg:flex-1">
                        <A href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Jace & Company</span>
                            <img
                                alt=""
                                src="/jace_company.png"
                                class="h-14 w-auto rounded-md"
                            />
                        </A>
                    </div>
                    <div class="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span class="sr-only">Open main menu</span>
                            <Icon path={bars_3} aria-hidden="true" class="size-6"/>
                        </button>
                    </div>
                    <div class="hidden lg:flex lg:gap-x-12">
                        <For each={navigation}>
                            {(item) => (
                                <A href={item.href} class="text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                </A>
                            )}
                        </For>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <A href="#" class="text-sm/6 font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </A>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen()} onOpenChange={setMobileMenuOpen}>
                    <Dialog.Overlay class="fixed inset-0 z-50"/>
                    <Dialog.Portal>
                        <Dialog.Content
                            class="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="flex items-center justify-between">
                                <A href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Jace & Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=pink&shade=600"
                                        class="h-8 w-auto"
                                    />
                                </A>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    class="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <Icon path={xMark} aria-hidden="true" class="size-6"/>
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 py-6">
                                        <For each={navigation}>
                                            {(item) => (
                                                <a
                                                    href={item.href}
                                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </For>
                                    </div>
                                    <div class="py-6">
                                        <a
                                            href="#"
                                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog>
            </header>

            <main>
                {/* Hero section */}
                <div class="relative isolate pt-14">
                    <svg
                        aria-hidden="true"
                        class="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} class="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                stroke-width={0}
                            />
                        </svg>
                        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%"
                              stroke-width={0}/>
                    </svg>
                    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-16 -mb-50">
                        <div
                            class="border border-gray-400 relative isolate overflow-hidden px-6 pt-20 sm:rounded-t-4xl sm:px-10 sm:pt-24 lg:pt-24 xl:px-24">
                        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                            <div class="flex">
                                <div
                                    class="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <span class="font-semibold text-pink-600">We’re hiring</span>
                                    <span aria-hidden="true" class="h-4 w-px bg-gray-900/10"/>
                                    <A href="#" class="flex items-center gap-x-1">
                                        <span aria-hidden="true" class="absolute inset-0"/>
                                        See open positions
                                        <Icon path={chevronRight} aria-hidden="true"
                                              class="-mr-2 size-5 text-gray-400"/>
                                    </A>
                                </div>
                            </div>
                            <h1 class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                A Better Way to Build.
                            </h1>
                            <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                We build the software that powers your business, the brands that connect with your customers, and the products they'll love.
                            </p>
                            <div class="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                                >
                                    Get started
                                </a>
                                <A href="#" class="text-sm/6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </A>
                            </div>
                        </div>
                        <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                            <svg role="img" view-box="0 0 366 729" class="mx-auto w-91.5 max-w-full drop-shadow-xl">
                                <title>App screenshot</title>
                                <defs>
                                    <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                        <rect rx={36} width={316} height={684}/>
                                    </clipPath>
                                </defs>
                                <path
                                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                    fill="#4B5563"
                                />
                                <path
                                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                    fill="#343E4E"
                                />
                                <foreignObject
                                    width={316}
                                    height={684}
                                    clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                    transform="translate(24 24)"
                                >
                                    {/*
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/component-images/mobile-app-screenshot.png"
                                    />
                                    */}
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
                {/* Logo cloud */}
                {/*
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 opacity-40 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">

                        <img
                            alt="Transistor"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                            width={158}
                            height={48}
                            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Reform"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                            width={158}
                            height={48}
                            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Tuple"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                            width={158}
                            height={48}
                            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="SavvyCal"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                            width={158}
                            height={48}
                            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        />
                        <img
                            alt="Statamic"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                            width={158}
                            height={48}
                            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        />

                    </div>
                </div>
*/}
                {/* Feature section */}
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        class="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
                        <div
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                            <div class="lg:row-start-2 lg:max-w-md">
                                <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                                    Get Started
                                </h2>
                                <p class="mt-6 text-lg/8 text-gray-300">

                                </p>
                            </div>
                            {/*
                            <img
                                alt="Product screenshot"
                                src="/compaytics.png"
                                width={2432}
                                height={1442}
                                class="opacity-70 relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-5xl lg:max-w-none"
                            />
                            */}
                            <div
                                class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                                <dl class="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                                    <For each={primaryFeatures}>
                                        {(feature) => (
                                            <div class="relative">
                                                <dt class="ml-9 inline-block font-semibold text-white">
                                                    <Icon path={feature.icon} aria-hidden="true"
                                                          class="absolute top-1 left-1 size-5 text-pink-500"/>
                                                    {feature.name}
                                                </dt>
                                                {' '}
                                                <dd class="inline">{feature.description}</dd>
                                            </div>
                                        )}
                                    </For>
                                </dl>
                            </div>
                        </div>
                        <div
                            aria-hidden="true"
                            class="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:-bottom-48 lg:translate-y-0"
                        >
                            <div
                                style={{
                                    'clip-path':
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                class="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature section */}
                <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <h2 class="text-base/7 font-semibold text-pink-600">Market Growth</h2>
                        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                            Building better businesses from the inside out.
                        </p>
                        <p class="mt-6 text-lg/8 text-gray-600">
                            We equip your business with the tools and strategies needed to expand your reach and build a strong presence in your industry.
                        </p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <For each={secondaryFeatures}>
                                {(feature) => (
                                    <div class="flex flex-col">
                                        <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                                            <Icon path={feature.icon} aria-hidden="true"
                                                  class="size-5 flex-none text-pink-600"/>
                                            {feature.name}
                                        </dt>
                                        <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                                            <p class="flex-auto">{feature.description}</p>
                                            <p class="mt-6">
                                                <A href={feature.href}
                                                   class="text-sm/6 font-semibold text-pink-600 hover:text-pink-500">
                                                    Learn more <span aria-hidden="true">→</span>
                                                </A>
                                            </p>
                                        </dd>
                                    </div>
                                )}
                            </For>
                        </dl>
                    </div>
                </div>

                {/* Newsletter section */}
                <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
                    <div
                        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                        <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Get notified when we’re launching
                        </h2>
                        <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla
                            et culpa.
                        </p>
                        <form class="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label html-for="email-address" class="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                auto-complete="email"
                                class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 sm:text-sm/6"
                            />
                            <button
                                type="submit"
                                class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Notify me
                            </button>
                        </form>
                        <svg
                            view-box="0 0 1024 1024"
                            aria-hidden="true"
                            class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
                        >
                            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fill-opacity="0.7"/>
                            <defs>
                                <radialGradient
                                    r={1}
                                    cx={0}
                                    cy={0}
                                    id="759c1415-0410-454c-8f7c-9a820de03641"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                                >
                                    <stop stop-color="#7775D6"/>
                                    <stop offset={1} stop-color="#E935C1" stop-opacity={0}/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Testimonials section */}
                <div class="relative isolate mt-32 sm:mt-56 sm:pt-32">
                    <svg
                        aria-hidden="true"
                        class="absolute inset-0 -z-10 hidden size-full mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:block"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={0}
                                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={0} class="overflow-visible fill-gray-50">
                            <path
                                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                                stroke-width={0}
                            />
                        </svg>
                        <rect fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" width="100%" height="100%"
                              stroke-width={0}/>
                    </svg>
                    <div class="relative">
                        <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                        >
                            <div
                                style={{
                                    'clip-path':
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                class="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
                            />
                        </div>
                        <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                        >
                            <div
                                style={{
                                    'clip-path':
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                class="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
                            />
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl text-center">
                                <h2 class="text-base/7 font-semibold text-pink-600">Testimonials</h2>
                                <p class="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                                    We have worked with thousands of amazing people
                                </p>
                            </div>
                            <div
                                class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                                <figure
                                    class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                                    <blockquote
                                        class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                                        <p>{`“${featuredTestimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption
                                        class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                        <img
                                            alt=""
                                            src={featuredTestimonial.author.imageUrl}
                                            class="size-10 flex-none rounded-full bg-gray-50"
                                        />
                                        <div class="flex-auto">
                                            <div
                                                class="font-semibold text-gray-900">{featuredTestimonial.author.name}</div>
                                            <div class="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                                        </div>
                                        <img alt="" src={featuredTestimonial.author.logoUrl}
                                             class="h-10 w-auto flex-none"/>
                                    </figcaption>
                                </figure>
                                <For each={testimonials}>
                                    {(columnGroup, columnGroupIdx) => (
                                        <div class="space-y-8 xl:contents xl:space-y-0">
                                            <For each={columnGroup}>
                                                {(column, columnIdx) => (
                                                    <div
                                                        class={cn(
                                                            (
                                                                (columnGroupIdx() === 0 && columnIdx() === 0) ||
                                                                (columnGroupIdx() === testimonials.length - 1 && columnIdx() === columnGroup.length - 1)
                                                                    ? 'xl:row-span-2' : 'xl:row-start-1')
                                                        )}
                                                    >
                                                        <div class={'space-y-8'}>
                                                            <For each={column}>
                                                                {(testimonial) => (
                                                                    <figure
                                                                        class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                                                    >
                                                                        <blockquote class="text-gray-900">
                                                                            <p>{`“${testimonial.body}”`}</p>
                                                                        </blockquote>
                                                                        <figcaption
                                                                            class="mt-6 flex items-center gap-x-4">
                                                                            <img
                                                                                alt=""
                                                                                src={testimonial.author.imageUrl}
                                                                                class="size-10 rounded-full bg-gray-50"
                                                                            />
                                                                            <div>
                                                                                <div
                                                                                    class="font-semibold text-gray-900">{testimonial.author.name}</div>
                                                                                <div
                                                                                    class="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                                                            </div>
                                                                        </figcaption>
                                                                    </figure>
                                                                )}
                                                            </For>
                                                        </div>
                                                    </div>
                                                )}

                                            </For>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer class="mt-32 sm:mt-56">
                <div class="mx-auto max-w-7xl border-t border-gray-200 px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <img
                            alt="Company name"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=pink&shade=600"
                            class="h-9"
                        />
                        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <For each={footerNavigation.solutions}>
                                            {(item) => (
                                                <li>
                                                    <A href={item.href}
                                                       class="text-sm/6 text-gray-600 hover:text-gray-900">
                                                        {item.name}
                                                    </A>
                                                </li>
                                            )}
                                        </For>
                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
                                    <ul role="list" class="mt-6 space-y-4">

                                    </ul>
                                </div>
                            </div>
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
                                    <ul role="list" class="mt-6 space-y-4">

                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
                                    <ul role="list" class="mt-6 space-y-4">

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                        <div>
                            <h3 class="text-sm/6 font-semibold text-gray-900">Subscribe to our newsletter</h3>
                            <p class="mt-2 text-sm/6 text-gray-600">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                        </div>
                        <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
                            <label html-for="email-address" class="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                required
                                placeholder="Enter your email"
                                auto-complete="email"
                                class="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-pink-600 sm:w-56 sm:text-sm/6"
                            />
                            <div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                                <button
                                    type="submit"
                                    class="flex w-full items-center justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                        <div class="flex gap-x-6 md:order-2">
                            <For each={footerNavigation.social}>
                                {(item) => (
                                    <A href={item.href} class="text-gray-600 hover:text-gray-800">
                                        <span class="sr-only">{item.name}</span>
                                        <Icon path={item.icon.path} class={item.icon.className}/>
                                    </A>
                                )}
                            </For>
                        </div>
                        <p class="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                            &copy; 2025 Jace Group, LLC. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
