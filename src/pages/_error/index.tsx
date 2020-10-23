import ErrorPage from '../../components/utils/errorpage'

type ErrorFace = {
  statusCode: number
}

function Error({ statusCode }: ErrorFace) {
  let message = ''

  if (statusCode == 404) {
    message = 'This Page Does Not Exist'
  } else {
    message = 'Some Problem Ocurred'
  }

  return (
    <>
      <ErrorPage
        statusCode={statusCode}
        message={message}
        title="Erro"
      ></ErrorPage>
    </>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
