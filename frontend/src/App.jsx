import React, { useState, useEffect } from 'react';

const App = () => {
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
                console.log(data);
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
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                                <option value="SP">SP</option>
                                <option value="MG">MG</option>
                                <option value="RJ">RJ</option>
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
                    </div>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                    <button type="submit">Salvar</button>
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
