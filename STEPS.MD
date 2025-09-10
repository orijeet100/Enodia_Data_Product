# Enodia Data Product - Setup Steps

## Quick Start: Conda Environment Setup

### 1. Clone or Download the Project

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Create the Conda Environment

```bash
conda env create -f environment.yml
```

### 3. Activate the Environment

```bash
conda activate enodia-data-product
```
*(Replace `enodia-data-product` with the name in your `environment.yml` if different.)*

### 4. Set Up Environment Variables

- Copy `env_example.txt` to `.env` and fill in your database and (optionally) Lambda details.

### 5. Initialize the Database (First Time Only)

```bash
python setup_database.py
```

### 6. Run the Apps

**Client App:**
```bash
streamlit run client_side.py
```

**Platform App:**
```bash
streamlit run app_side.py
```

---

## Notes

- Make sure your database is running and accessible.
- If you get `ModuleNotFoundError`, ensure you activated the conda environment.
- For any issues, check your `.env` file and database connection details.