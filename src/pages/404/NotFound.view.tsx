import { Button } from 'antd'
import { Container } from './NotFound.style'

export function NotFoundView() {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-10">
            <div className="four_zero_four_bg">
              <h1>404</h1>
            </div>
            <div className="contant_box_404">
              <h3>Parece que você está perdido</h3>
              <p>A página que você procura não está disponível!</p>

              <Button
                href="/"
                className="link_404"
                title='Voltar para Home'
              >
                Voltar
              </Button>

            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}