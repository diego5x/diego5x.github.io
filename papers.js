const papers = [
{
  titulo: "📄 Ambiente Linux i3wm e Suas Vantagens",
  arquivo: "papers/paper1.html"
}];

const container = document.getElementById("papers");

papers.forEach(paper => {
  const div = document.createElement("div");
  div.className = "post";
  
  const link = document.createElement("a");
  link.href = paper.arquivo;
  link.textContent = paper.titulo;
  
  div.appendChild(link);
  container.appendChild(div);
});
