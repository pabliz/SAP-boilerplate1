import Home from './views/Home'
import Projects from './views/Projects'
import ProjectView from './views/ProjectView'
import About from './views/About'
import Studies from './views/Studies'

/****************************************************
 * Match RegEx
 */
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = (match) => {
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

        return Object.fromEntries(keys.map((key, i) => {
            return [key, values[i]]
        }))
    }
    /****************************************************
     * History API 
     */
const navigateTo = url => {
        history.pushState(null, null, url)
        router()
    }
    /****************************************************
     * Router
     */
const router = async() => {
    const routes = [{ path: '/', view: Home },
            { path: '/projects', view: Projects },
            { path: '/projects/:id', view: ProjectView },
            { path: '/about', view: About },
            { path: '/studies', view: Studies },
        ]
        // test routes for matches
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    /****************************************************
     * NEED TO SET 404 PAGE!
     */
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }
    /****************************************************
     * add html content
     */
    const view = new match.route.view(getParams(match))
    const content = document.querySelector("#app")
    content.innerHTML = await view.getHtml()
}

/****************************************************
 * event listeners
 */
// history api
window.addEventListener("popstate", router);
// links
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})