

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer />
    </>
  );
}
