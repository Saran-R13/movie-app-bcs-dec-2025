// Parent -> Child -> props
export function ColorBox({ clr }) {
  const styles = {
    height: "1.5rem",
    width: "10rem",
    marginTop: "1rem",
    backgroundColor: clr,
  };

  return <div style={styles}></div>;
}