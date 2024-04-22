import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, TextField } from "@mui/material";
import Portal from '@mui/material/Portal';

export default function AddExpense() {
    const [itemCategory, setItemCategory] = useState("");
    const [itemName, setItemName] = useState("");
    const [stockQty, setStockQty] = useState(0);
    const [unit, setUnit] = useState("");
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [purchaseDate, setPurchaseDate] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleAddBtn = async () => {
        try {
            if (!itemCategory || !itemName || !stockQty || !unit || !purchasePrice || !purchaseDate) {
                setError("All fields are required");
                return;
            }

            const formData = { itemCategory, itemName, stockQty, unit, purchasePrice, purchaseDate };
            await axios.post(`http://localhost:8080/smart-apperal/api/inventories/addItem`, formData);
            alert("Successfully Added");
            navigate("/inventory");
        } catch (error) {
            console.error("Error:", error.message);
            alert("Failed to add item. Please try again.");
        }
    };

    const handleBackBtn = () => {
        navigate("/inventory");
    };

    const handleClearBtn = () => {
        setItemCategory("");
        setItemName("");
        setStockQty(0);
        setUnit("");
        setPurchasePrice(0);
        setPurchaseDate("");
        setError(null);
    };

    return (
        <div className="add-material-container">
            <h2>Add Material</h2>
            <form>
                <TextField
                    label="Item Category"
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Stock Quantity"
                    type="number"
                    value={stockQty}
                    onChange={(e) => setStockQty(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Purchase Price"
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Purchase Date"
                    type="date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    fullWidth
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {error && <p className="error-message">{error}</p>}
                <div className="button-group">
                    <Button variant="contained" color="primary" onClick={handleAddBtn}>
                        Add
                    </Button>
                    <Button variant="contained" onClick={handleClearBtn}>
                        Clear
                    </Button>
                    <Button variant="contained" onClick={handleBackBtn}>
                        Back
                    </Button>
                </div>
            </form>
        </div>
    );
}
