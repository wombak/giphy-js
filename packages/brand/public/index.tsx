import { h, render } from 'preact'
import Header from './header'
import IconsGuide from './icons-guide'
import ColorsGuide from './color-guide'
import LoaderGuide from './loader-guide'

declare const module: any

const mountNode = document.getElementById('root')!

render(
    <div>
        <Header>
            <h1>GIPHY Brand</h1>
        </Header>
        <ColorsGuide />
        <IconsGuide />
        <LoaderGuide />
    </div>,
    mountNode,
    mountNode.lastChild as Element
)

// Hot Module Replacement
if (module.hot) {
    module.hot.accept()
}
