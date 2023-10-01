import  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Input,
  Button,
  Form,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MyNavbar.module.css";
import { getSearch} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const MyNavbar = () => {
  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits);


  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);    
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(search))
    console.log("Búsqueda enviada:", search);
    setSearch('')
    
  };

  return (
    <div>
       <ToastContainer />
      <Navbar expand="md" className={styles.backgroundFav}>
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Link>{" "}
        <NavbarText className={ styles.textnav }>
          <strong>GitHub Commits APP</strong>
        </NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto ms-auto">
            <NavItem>
              <NavLink className={ styles.textnav } href="/home/">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={ styles.textnav } href="/home/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={ styles.textnav } href="/commits/">
                Commits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={ styles.textnav } href="http://localhost:3000/docs">
                Docs Backend
              </NavLink>
            </NavItem>
          </Nav>

          {/* Barra de búsqueda */}
          <Form
            style={{ display: "flex" }}
            onSubmit={handleSearchSubmit}
          >
            <Input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              className={styles.inputsearch}
            />
            <Button type="submit" className={styles.buttonSearch}>
              search
            </Button>
          </Form>
        </Collapse>
      </Navbar>
    </div>
  );
};
