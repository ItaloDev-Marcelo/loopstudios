import { render, screen} from '@testing-library/react';
import MainPage from '../MainPage'

const renderComponent = () => {
    render(<MainPage/>)
}


describe('MainPage', () => {
    it('Deve rederizar corretamente',  () => {
        const h2Text = 'The leader in interactive VR';
        const pText = 'Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.'
        renderComponent()
        expect(screen.getByText(h2Text)).toBeInTheDocument()
        expect(screen.getByText(pText)).toBeInTheDocument()
    })
})