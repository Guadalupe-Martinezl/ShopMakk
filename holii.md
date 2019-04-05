# ShopMakk
const Busqueda = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(100%, -10%);

`;
const Buscar = styled.button`
background:  #000 ;
color: #fff;
font:100% "sans-serif";
border-radius: 1em;
border: 1px solid black;
padding: 0.25em 1em;
transform: translate(565%);
width: 7%;
max-width: 500px;
box-sizing: border-box;
`;
<Busqueda
     type="text"
     placeholder="Busqueda" />

     <Buscar
        name="busqueda"
        type="submit">
        Buscar
        </Buscar>
