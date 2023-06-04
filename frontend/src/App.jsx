import React, { useState, useEffect } from 'react';
import { validationUtils } from "./utils/validations.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [formValues, setFormValues] = useState({
        cnpj: '',
        name: '',
        cep: '',
        address: '',
        addressNumber: '',
        addressNeighborhood: '',
        addressState: '',
        addressCity: '',
        id: ''
    });

    const [gridData, setGridData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        const isValid = validationUtils.validate(name, value);
        const inputElement = e.target;

        if (!isValid) {
            inputElement.classList.add('is-invalid');
        } else {
            inputElement.classList.remove('is-invalid');
        }

        const formInputs = Array.from(document.querySelectorAll('.form-control'));
        const isFormValid = formInputs.every((input) => !input.classList.contains('is-invalid'));
        setIsFormValid(isFormValid);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/empresas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            const data = await response.json();

            if (response.ok) {
                setFormValues({
                    cnpj: '',
                    name: '',
                    cep: '',
                    address: '',
                    addressNumber: '',
                    addressNeighborhood: '',
                    addressState: '',
                    addressCity: '',
                    id: ''
                });

                fetchGridData().then(data => {
                    setGridData(data);
                });

                toast.success(data[0], { autoClose: 5000 });
            } else {
                toast.error(data[0], { autoClose: 5000 });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        setFormValues({
            cnpj: '',
            name: '',
            cep: '',
            address: '',
            addressNumber: '',
            addressNeighborhood: '',
            addressState: '',
            addressCity: '',
            id: ''
        });
    };

    const handleEditRow = (rowData) => {
        setFormValues(rowData);
    };

    const fetchGridData = async () => {
        try {
            const response = await fetch('http://localhost/empresas', {
                method: 'GET'
            });
            return await response.json();
        } catch (error) {
            console.error('Error fetching grid data:', error);
        }
    };

    useEffect(() => {
        fetchGridData().then(data => {
            setGridData(data);
        });
    }, []);

    return (
        <div>
            <div className="form-container" style={{display:'flex', justifyContent:'center'}}>
                <form className="form-floating" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            CNPJ:
                            <input
                                className="form-control"
                                type="text"
                                name="cnpj"
                                value={formValues.cnpj}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Nome da Empresa:
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            CEP:
                            <input
                                className="form-control"
                                type="text"
                                name="cep"
                                value={formValues.cep}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Endereço:
                            <input
                                className="form-control"
                                type="text"
                                name="address"
                                value={formValues.address}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Número:
                            <input
                                className="form-control"
                                type="text"
                                name="addressNumber"
                                value={formValues.addressNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Bairro:
                            <input
                                className="form-control"
                                type="text"
                                name="addressNeighborhood"
                                value={formValues.addressNeighborhood}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            UF:
                            <select
                                className="form-select"
                                id="addressState"
                                name="addressState"
                                value={formValues.addressState}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">-</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Cidade:
                            <input
                                className="form-control"
                                type="text"
                                name="addressCity"
                                value={formValues.addressCity}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>

                    </div>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                    <button type="submit" disabled={!isFormValid}>Salvar</button>
                </form>
            </div>

            <br />

            <div className="table-container" style={{display:'flex', justifyContent:'center'}}>
                <table className="table table-striped table-hover table-bordered table-sm table-responsive" style={{width:'50%'}}>
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Nome da Empresa</th>
                        <th scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {gridData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.cnpj}</td>
                            <td>{row.name}</td>
                            <td>
                                <button onClick={() => handleEditRow(row)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
