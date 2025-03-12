```markdown
# Welcome to the Flights Service

## Project Setup

Follow these steps to set up the project on your local machine:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**
   ```bash
   cd <project-directory>
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create an `.env` file** in the root directory and add the following variable:
   ```env
   PORT=3000
   ```
5. **Set up the database configuration**
   - Inside the `src/config` folder, create a new file `config.json` and add the following JSON structure:
   
   ```json
   {
     "development": {
       "username": "<your-db-username>",
       "password": "<your-db-password>",
       "database": "<your-database-name>",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

6. **Initialize Sequelize**
   ```bash
   npx sequelize init
   ```

---

## Database Design

### Tables & Relationships

- **Airplane Table**
- **Flight Table**
- **Airport Table**
- **City Table**

### Relationships:
- A **Flight** belongs to an **Airplane**, but one **Airplane** can be used in multiple flights.
- A **City** has many **Airports**, but an **Airport** belongs to one **City** (One-to-Many).
- A **Flight** belongs to one **Airport**.

---

### Table Schema

#### **City Table**
| Column      | Type      |
|------------|----------|
| id         | Integer (Primary Key) |
| name       | String   |
| created_at | Timestamp |
| updated_at | Timestamp |

#### **Airport Table**
| Column      | Type      |
|------------|----------|
| id         | Integer (Primary Key) |
| name       | String   |
| address    | String   |
| city_id    | Integer (Foreign Key referencing `City.id`) |
| created_at | Timestamp |
| updated_at | Timestamp |

**Relationship:** A City has many Airports, and an Airport belongs to a City (One-to-Many).

---

## Model & Migration Commands

### **Generate Airport Model**
```bash
npx sequelize model:generate --name Airport --attributes name:string,address:string,CityId:integer
```

### **Run Migrations**
```bash
npx sequelize db:migrate
```
```

