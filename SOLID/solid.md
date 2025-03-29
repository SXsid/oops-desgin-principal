
1) **SRP: Single Responsibility Principle**

A class should have only one reason to change, meaning it should focus on a single responsibility. This ensures better readability, maintainability, and separation of concerns, making debugging and testing easier. However, SRP should not be overdone to the point where it results in unnecessary fragmentation, making the system harder to manage.

2) **OCP: Open-Closed Principle**

A class should be open for extension but closed for modification, meaning new features should be added without altering existing, tested code. This is typically achieved using inheritance, interfaces, or extension methods, ensuring the system remains scalable and stable. However, this doesn't mean new methods cannot be added—it simply means modifying core functionality should be avoided when extending behavior.

3) **LSP: Liskov Substitution Principle**

Subtypes should be replaceable by their base types without altering the correctness of the program. This ensures that any subclass can be used wherever its parent class is expected without introducing unexpected behavior. Violating LSP often leads to runtime errors, like a subclass removing or modifying a fundamental behavior of its parent (e.g., a Penguin class inheriting from Bird but failing when fly() is called). The best way to avoid this is by favoring composition over inheritance, ensuring that behaviors are correctly separated.

**Key difference between polymorphism and LSP:**
- Subtype Polymorphism: "A subclass can override and extend the behavior of its parent."
- LSP: "A subclass must not change the fundamental behavior of its parent in a way that breaks existing expectations."

**Note:** Always think of LSP when using polymorphism to ensure that subclasses can be substituted safely without introducing errors.


4) **ISP: Interface Segregation Principle**

Clients should not be forced to depend on interfaces they don't use. This principle suggests breaking down large interfaces into smaller, more specific ones. Instead of having one large interface with many methods, create multiple interfaces with focused functionality. This reduces coupling, increases cohesion, and makes the system more maintainable.

**Example:**
- Bad: One large `Worker` interface with methods for both manual and automated work
- Good: Separate `ManualWorker` and `AutomatedWorker` interfaces with specific methods

**Benefits:**
- Reduces implementation overhead
- Prevents unnecessary dependencies
- Makes interfaces more focused and maintainable


5) **DIP: Dependency Inversion Principle**

High-level modules should not depend on low-level modules; both should depend on abstractions. This principle promotes loose coupling through abstraction layers, making systems more flexible and maintainable. Rather than having direct dependencies, components should rely on interfaces or abstract classes.


**Benefits:**
- Easier testing through dependency injection(change the db on the run )
- Flexible switching between implementations
- Reduced coupling between components
- Simplified maintenance and updates

