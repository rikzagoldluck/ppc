export async function getMcnStop(section) {
  const res = await fetch(
    "http://localhost:3001/mcnstop?mcn_section=" + section
  );
  return await res.json();
}
