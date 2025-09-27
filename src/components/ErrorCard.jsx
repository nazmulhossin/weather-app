const ErrorCard = ({ error }) => {
  return (
    <main className="container-custom">
      <div className="big-card text-center py-40 mb-8">
        <div className="text-6xl mb-6 opacity-80">⚠️</div>
        <h2 className="text-2xl text-error font-semibold mb-4">Unable to Load Weather Data</h2>
        <p className="text-text-secondary">{error}</p>
      </div>
    </main>
  )
}

export default ErrorCard