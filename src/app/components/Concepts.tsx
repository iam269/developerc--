import React from 'react';
import { motion } from 'motion/react';
import { CodeBlock } from './CodeBlock';
import { Box, Layers, Zap, Database, ArrowRight, Repeat, Hash, Brackets, List, Cpu, Shield, FileCode, Folder, Settings } from 'lucide-react';

const concepts = [
  {
    title: 'Variables & Data Types',
    description: 'C++ provides primitive data types (int, float, double, char, bool) and the ability to create custom types.',
    icon: Hash,
    code: `// Fundamental data types
int number = 42;           // Integer
double price = 19.99;      // Double precision
char letter = 'A';         // Character
bool active = true;        // Boolean
std::string text = "Hello"; // String

// Constant
const int MAX_SIZE = 100;`
  },
  {
    title: 'Control Flow',
    description: 'Conditional statements and loops for controlling program execution.',
    icon: ArrowRight,
    code: `// If-else
if (x > 10) {
    std::cout << "Greater" << std::endl;
} else if (x > 5) {
    std::cout << "Medium" << std::endl;
} else {
    std::cout << "Small" << std::endl;
}

// Switch
switch (option) {
    case 1: std::cout << "One"; break;
    case 2: std::cout << "Two"; break;
    default: std::cout << "Other";
}`
  },
  {
    title: 'Loops',
    description: 'C++ offers multiple loop types: for, while, do-while for iterating through data.',
    icon: Repeat,
    code: `// Classic for loop
for (int i = 0; i < 5; i++) {
    std::cout << i << " ";
}

// Range-based for
std::vector<int> nums = {1, 2, 3};
for (int n : nums) {
    std::cout << n << " ";
}

// While
while (condition) {
    // execute while true
}`
  },
  {
    title: 'Functions',
    description: 'Reusable units of code that can take parameters and return values.',
    icon: Settings,
    code: `// Simple function
int sum(int a, int b) {
    return a + b;
}

// Function with reference parameter
void modify(int& x) {
    x = x * 2;
}

// Function with default parameters
int product(int a, int b = 1) {
    return a * b;
}`
  },
  {
    title: 'Pointers & References',
    description: 'Direct memory control through pointers and references for maximum efficiency.',
    icon: Cpu,
    code: `int var = 10;
int* ptr = &var;  // Pointer to address

std::cout << var;   // Value: 10
std::cout << ptr;   // Address: 0x...
std::cout << *ptr;  // Dereference: 10

// Reference (alias)
int& ref = var;
ref = 20;  // var becomes 20`
  },
  {
    title: 'Structs & Classes',
    description: 'Structs are composite data types, and classes add encapsulation and member functions.',
    icon: Brackets,
    code: `// Structure
struct Person {
    std::string name;
    int age;
};

// Class
class BankAccount {
private:
    double balance;
public:
    void deposit(double amount) {
        balance += amount;
    }
    double getBalance() const {
        return balance;
    }
};`
  },
  {
    title: 'Inheritance',
    description: 'Classes can inherit properties and methods from other classes, creating hierarchies.',
    icon: Folder,
    code: `class Animal {
public:
    void eat() { }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "Woof!" << std::endl;
    }
};

Dog d;
d.eat();  // Inherited from Animal
d.bark(); // Own method`
  },
  {
    title: 'Polymorphism',
    description: 'The same code can behave differently depending on the object type.',
    icon: List,
    code: `class Shape {
public:
    virtual void draw() = 0; // Pure virtual
};

class Circle : public Shape {
    void draw() override {
        std::cout << "Drawing circle" << std::endl;
    }
};

class Square : public Shape {
    void draw() override {
        std::cout << "Drawing square" << std::endl;
    }
};`
  },
  {
    title: 'Object-Oriented Programming (OOP)',
    description: 'C++ supports classes, inheritance, polymorphism and encapsulation for complex system modeling.',
    icon: Box,
    code: `class Engine {
public:
  void start() {
    std::cout << "Engine started" << std::endl;
  }
};

class Car : public Engine {
  // Inheritance
};`
  },
  {
    title: 'Generic Programming (Templates)',
    description: 'Templates allow writing flexible code that works with any data type.',
    icon: Layers,
    code: `template <typename T>
T add(T a, T b) {
  return a + b;
}

auto result = add(5, 10);    // int
auto res2 = add(5.5, 2.1);  // double

// Template with multiple types
template <typename T, typename U>
auto max(T a, U b) {
    return (a > b) ? a : b;
}`
  },
  {
    title: 'STL - Standard Template Library',
    description: 'Pre-built collections and algorithms for efficient data manipulation.',
    icon: Database,
    code: `#include <vector>
#include <map>
#include <algorithm>

std::vector<int> vec = {5, 2, 8, 1};
std::sort(vec.begin(), vec.end()); // 1,2,5,8

std::map<std::string, int> grades;
grades["Alice"] = 10;
grades["Bob"] = 9;

for (const auto& [name, grade] : grades) {
    std::cout << name << ": " << grade;
}`
  },
  {
    title: 'Exception Handling',
    description: 'Robust mechanism for handling errors and unexpected situations.',
    icon: Shield,
    code: `try {
    int result = divide(a, b);
    std::cout << result;
} catch (const std::exception& e) {
    std::cerr << "Error: " << e.what();
} catch (...) {
    std::cerr << "Unknown error";
}

// Throw custom
throw std::runtime_error("Error message");`
  },
  {
    title: 'Memory Management',
    description: 'Direct control over system resources with RAII and Smart Pointers.',
    icon: Zap,
    code: `#include <memory>

// Smart Pointer - automatic cleanup
auto ptr = std::make_unique<Data>();

// Shared Pointer
auto shared = std::make_shared<int>(42);

// Raw pointer - manual
int* raw = new int[100];
delete[] raw;  // Don't forget!

// RAII with class
class Resource {
public:
    ~Resource() { cleanup(); }
};`
  },
  {
    title: 'File I/O',
    description: 'Reading and writing from/to files for data persistence.',
    icon: FileCode,
    code: `#include <fstream>

// Write to file
std::ofstream fout("data.txt");
fout << "Name: Alice" << std::endl;
fout << "Age: 25" << std::endl;
fout.close();

// Read from file
std::ifstream fin("data.txt");
std::string line;
while (std::getline(fin, line)) {
    std::cout << line << std::endl;
}
fin.close();`
  }
];

export const Concepts = () => {
  return (
    <section id="concepts" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Fundamental Concepts</h2>
            <p className="text-white/60">The language architecture is built on the principle of maximum efficiency and total freedom for the developer.</p>
          </div>
          <div className="text-cyan-400 font-mono text-sm">{"std::cout << \"Unleash Power\";"}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{c.description}</p>
                </div>
              </div>
              <CodeBlock code={c.code} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
