import { render, screen, fireEvent} from '@testing-library/react';
import NavBar from '../NavBar'


const renderComponent = () => {
     render(<NavBar />)
}

describe('NavBar', () => {
    it('Deve rederizar corretamente', () => {
        renderComponent()
        expect(screen.getByText('loopstudios')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Carrers')).toBeInTheDocument()
        expect(screen.getByText('Events')).toBeInTheDocument()
        expect(screen.getByText('Products')).toBeInTheDocument()
        expect(screen.getByText('Support')).toBeInTheDocument()
    })

    it('deve chamar a nav quando clicar no botão', () => {
        renderComponent()
        const btn = screen.getByRole('button');

        const icon = btn.querySelector('img')

        expect(icon).toHaveClass('is-open')

        fireEvent.click(btn)

        expect(icon).toHaveClass('is-closed')
    })


    
})