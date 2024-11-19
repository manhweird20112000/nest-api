
Nếu bạn muốn định dạng Markdown sử dụng các ký tự và chú thích rõ hơn:

```markdown
# Project Structure

## `src/`

### `application/` 
- **Purpose**: Use cases and services.
- **Contents**:
  - `dto/`: Data Transfer Objects.
  - `interfaces/`: Input/Output ports (abstractions).
  - `use-cases/`: Business logic.
  - `mappers/`: Mapping between domain and DTOs.

### `domain/`
- **Purpose**: Core business logic.
- **Contents**:
  - `entities/`: Domain entities.
  - `value-objects/`: Value Objects.
  - `repositories/`: Repository interfaces.
  - `exceptions/`: Domain-specific exceptions.

### `infrastructure/`
- **Purpose**: Frameworks and external libraries.
- **Contents**:
  - `persistence/`: Implementations of repositories.
  - `config/`: Application configuration.
  - `interceptors/`: Interceptors (e.g., logging).
  - `guards/`: Guards (e.g., authentication).
  - `filters/`: Exception filters.

### `presentation/`
- **Purpose**: API layer (controllers).
- **Contents**:
  - `controllers/`: REST or GraphQL controllers.
  - `middleware/`: Middleware (e.g., request validation).

### `main.ts`
- **Purpose**: Application entry point.
