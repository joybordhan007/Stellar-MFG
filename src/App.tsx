import { useEffect, useMemo, useState } from "react"
import Home from "./pages/Home"
import AboutUs from "./pages/Page-1-580"
import OurCapabilities from "./pages/Page-1-1081"
import OurFactories from "./pages/Page-1-1416"
import Sustainability from "./pages/Page-1-1859"
import Products from "./pages/Page-1-2309"
import LetsTalk from "./pages/Page-1-2558"

type Route = {
  path: string
  label: string
  height: number
  component: () => React.JSX.Element
}

const routes: Route[] = [
  { path: "/", label: "Home", height: 6080, component: Home },
  { path: "/about", label: "About Us", height: 6080, component: AboutUs },
  {
    path: "/capabilities",
    label: "Our Capabilities",
    height: 3900,
    component: OurCapabilities,
  },
  {
    path: "/factories",
    label: "Our Factories",
    height: 3696,
    component: OurFactories,
  },
  {
    path: "/sustainability",
    label: "Sustainability",
    height: 5056,
    component: Sustainability,
  },
  { path: "/products", label: "Products", height: 4080, component: Products },
  { path: "/contact", label: "Let's Talk", height: 2968, component: LetsTalk },
]

const textRoutes = new Map([
  ["home", "/"],
  ["about us", "/about"],
  ["our capabilities", "/capabilities"],
  ["our factories", "/factories"],
  ["sustainability", "/sustainability"],
  ["products", "/products"],
  ["let’s talk", "/contact"],
  ["let's talk", "/contact"],
  ["partner with us", "/contact"],
])

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/"
  return routes.some((route) => route.path === path) ? path : "/"
}

export default function App() {
  const [path, setPath] = useState(currentPath)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handlePopState = () => setPath(currentPath())
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener("popstate", handlePopState)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const route = useMemo(
    () => routes.find((candidate) => candidate.path === path) ?? routes[0],
    [path],
  )
  const scale = Math.min(1, viewportWidth / 1920)
  const Page = route.component

  const navigate = (nextPath: string) => {
    if (nextPath === path) return
    window.history.pushState({}, "", nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const text = target.textContent?.trim().toLowerCase()
    if (!text) return

    const nextPath = textRoutes.get(text)
    if (nextPath) {
      event.preventDefault()
      navigate(nextPath)
    }
  }

  return (
    <main className="site-shell">
      <nav className="mobile-nav" aria-label="Primary navigation">
        {routes.map((item) => (
          <button
            aria-current={item.path === path ? "page" : undefined}
            key={item.path}
            onClick={() => navigate(item.path)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div
        className="design-stage"
        style={{ height: route.height * scale, maxWidth: 1920 }}
      >
        <div
          className="design-canvas"
          onClick={handlePageClick}
          style={{
            height: route.height,
            transform: `scale(${scale})`,
          }}
        >
          <Page />
        </div>
      </div>
    </main>
  )
}
