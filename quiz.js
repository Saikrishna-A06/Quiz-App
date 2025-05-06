document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

let Python = [{
        qstn: "Who developed Python Programming Language?",
        opt1: "Wick van Rossum",
        opt2: "Rasmus Lerdorf",
        opt3: "Guido van Rossum",
        opt4: "Niene Stom",
        ans: "Guido van Rossum",
        code: ""
    },

    {
        qstn: "Which of the following is the correct extension of the Python file?",
        opt1: ".python",
        opt2: ".pl",
        opt3: ".py",
        opt4: ".p",
        ans: ".py",
        code: ""

    },

    {
        qstn: "Which of the following character is used to give single-line comments in Python?",
        opt1: "//",
        opt2: "#",
        opt3: "/*",
        opt4: "/",
        ans: "#",
        code: ""

    },


    {
        qstn: "What will be the output of the following Python code?",
        opt1: "1 2 3",
        opt2: "error",
        opt3: "1 2",
        opt4: "none of the mentioned",
        ans: "error",
        code: `i = 1
while True:
    if i%3 == 0:
        break
    print(i)
 
    i + = 1`

    },



    {
        qstn: "What will be the output of the following Python code snippet if x=1?",
        opt1: "4",
        opt2: "2",
        opt3: "1",
        opt4: "8",
        ans: "4",
        code: "x<<2"

    },



    {
        qstn: "Which of the following is the truncation division operator in Python?",
        opt1: "|",
        opt2: "//",
        opt3: "/",
        opt4: "%",
        ans: "//",
        code: ""

    },


    {
        qstn: "What will be the output of the following Python code",
        opt1: "[1, 0, 2, 'hello', '', []]",
        opt2: "Error",
        opt3: "[1, 2, 'hello']",
        opt4: "[1, 0, 2, 0, 'hello', '', []]",
        ans: "[1, 2, 'hello']",
        code: `l=[1, 0, 2, 0, 'hello', '', []]
                 list(filter(bool, l))`

    },




    {
        qstn: "What will be the output of the following Python function?",
        opt1: "-4",
        opt2: "-3",
        opt3: "2",
        opt4: "false",
        ans: "false",
        code: "min(max(False,-3,-4), 2,7)"

    },



    {
        qstn: "Which of the following is not a core data type in Python programming?",
        opt1: "tuples",
        opt2: "lists",
        opt3: "class",
        opt4: "dictionary",
        ans: "class",
        code: ""

    },



    {
        qstn: "What will be the output of the following Python expression if x=56.236?",
        opt1: "56.236",
        opt2: "56.23",
        opt3: "56.0000",
        opt4: "56.24",
        ans: "56.24",
        code: `print("%.2f"%x)`

    },

    {
        qstn: "What arithmetic operators cannot be used with strings in Python?",
        opt1: "*",
        opt2: "-",
        opt3: "+",
        opt4: "all are mentioned",
        ans: "-",
        code: ""

    },

    {
        qstn: "Which of the following Python statements will result in the output: 6?",
        opt1: "A[2][1]",
        opt2: "A[1][2]",
        opt3: "A[3][2]",
        opt4: "A[2][3]",
        ans: "A[1][2]",
        code: `A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]`
    },

    {
        qstn: "What is output of print(math.pow(3, 2))?",
        opt1: "9.0",
        opt2: "none",
        opt3: "9",
        opt4: "none of  the mentioned",
        ans: "9.0",
        code: ""

    },

    {
        qstn: "What will be the output of the following Python code?",
        opt1: "1",
        opt2: "1 2",
        opt3: "1 2 3 4 5...",
        opt4: "1 3 5 7 9 ...",
        ans: "1 3 5 7 9 ...",
        code: `i = 1
while True:
    if i%2 == 0:
        break
    print(i)
    i += 2`

    },



    {
        qstn: "What will be the output of the following Python code?",
        opt1: "0 1 2 3 4 Here",
        opt2: "0 1 2 3 4 5 Here",
        opt3: "0 1 2 3 4",
        opt4: "1 2 3 4 5",
        ans: "0 1 2 3 4",
        code: `for i in range(10):
    if i == 5:
        break
    else:
        print(i)
else:
    print("Here")`

    },



    {
        qstn: "Which function overloads the // operator?",
        opt1: "__div__()",
        opt2: "__ceildiv__()",
        opt3: "__floordiv__()",
        opt4: "__truediv__()",
        ans: "__floordiv__()",
        code: ""

    },

    {
        qstn: "Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write?",
        opt1: "A.__init__(self)",
        opt2: "B.__init__(self)",
        opt3: "A.__init__(B)",
        opt4: "B.__init__(A)",
        ans: "A.__init__(self)",
        code: ""
    },

    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error because class B inherits A but variable x isn't inherited",
        opt2: "0 0",
        opt3: "0 1",
        opt4: "Error, the syntax of the invoking method is wrong",
        ans: "0 1",
        code: `class Test:
    def __init__(self):
        self.x = 0
class Derived_Test(Test):
    def __init__(self):
        Test.__init__(self)
        self.y = 1
def main():
    b = Derived_Test()
    print(b.x,b.y)
main()`
    },
    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error, the syntax of the invoking method is wrong",
        opt2: "The program runs fine but nothing is printed",
        opt3: "1 0",
        opt4: "1 2",
        ans: "1 2",
        code: `class A:
    def __init__(self, x= 1):
        self.x = x
class der(A):
    def __init__(self,y = 2):
        super().__init__()
        self.y = y
def main():
    obj = der()
    print(obj.x, obj.y)
main()`
    },

    {
        qstn: "What will be the output of the following Python code?",
        opt1: "1 1 1",
        opt2: "1 2 3",
        opt3: "'1' '1' '1'",
        opt4: "An exception is thrown",
        ans: "1 1 1",
        code: `class A:
    def __str__(self):
        return '1'
class B(opt1:'':
    def __init__(self):
        super().__init__()
class C(opt2:'':
    def __init__(self):
        super().__init__()
def main():
    obj1 = B()
    obj2 = A()
    obj3 = C()
    print(obj1, obj2,obj3)
main()`

    },

    {
        qstn: "What will be the output of the following Python code?",
        opt1: "11",
        opt2: "2",
        opt3: "1",
        opt4: "AN EXCEPTION IS THROWN",
        ans: "2",
        code: `class Demo:
    def __init__(self):
        self.x = 1
    def change(self):
        self.x = 10
class Demo_derived(Demo):
    def change(self):
        self.x=self.x+1
        return self.x
def main():
    obj = Demo_derived()
    print(obj.change())
 
main()`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "15",
        opt2: "60",
        opt3: "An exception is thrown",
        opt4: "30",
        ans: "30",
        code: `class A:
    def __init__(self):
        self.multiply(15)
        print(self.i)
 
    def multiply(self, i):
        self.i = 4 * i;
class B(A):
    def __init__(self):
        super().__init__()
 
    def multiply(self, i):
        self.i = 2 * i;
obj = B()`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "False",
        opt2: "1",
        opt3: "True",
        opt4: "An exception is true",
        ans: "True",
        code: `class A:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __str__(self):
        return 1
    def __eq__(self, other):
        return self.x * self.y == other.x * other.y
obj1 = A(5, 2)
obj2 = A(2, 5)
print(obj1 == obj2)`

    },



    {
        qstn: "What will be the output of the following Python code?",
        opt1: "A",
        opt2: "A B",
        opt3: "An exception is true",
        opt4: "B",
        ans: "B",
        code: `class A:
    def one(self):
        return self.two()    	
    def two(self):
        return 'A'   
class B(A):
    def two(self):
        return 'B'
obj2=B()
print(obj2.two())`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error",
        opt2: "12",
        opt3: "15",
        opt4: "1512",
        ans: "15",
        code: `def f1():
    x=15
    print(x)
x=12
f1()`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error",
        opt2: "12 4",
        opt3: "4 12",
        opt4: "4 15",
        ans: "4 12",
        code: `x=12
def f1(a,b=x):
    print(a,opt2:''
x=15
f1(4)`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "[3,2,4]",
        opt2: "[2,3,4]",
        opt3: "Error",
        opt4: "[3,4,2]",
        ans: "[3,4,2]",
        code: `def f1(a,b=[]):
    b.append(A)
    return b
print(f1(2,[3,4]))`

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "1 2 3 4",
        opt2: "5 10 15 4",
        opt3: "10 20 30 40",
        opt4: "5 10 15 40",
        ans: "10 20 30 40",
        code: `def f(p, q, r):
    global s
    p = 10
    q = 20
    r = 30
    s = 40
    print(p,q,r,s)
p,q,r,s = 1,2,3,4
f(5,10,15)`

    },

    {
        qstn: "What will be the output of the following Python code?",
        opt1: " Error",
        opt2: "7",
        opt3: "8",
        opt4: "15",
        ans: "7",
        code: `x = 5 
def f1():
    global x
    x = 4
def f2(a,opt2:'':
    global x
    return a+b+x
f1()
total = f2(1,2)
print(total)`

    },




    {
        qstn: "Read the following Python code carefully and point out the global variables?",
        opt1: "x",
        opt2: "y",
        opt3: "x,y and z",
        opt4: "neither x,nor y, nor z",
        ans: "x,y and z",
        code: `y, z = 1, 2
def f():
    global x
    x = y+z`

    },





    {
        qstn: "What will be the output of the following Python code, if the code is run on Windows operating system?",
        opt1: "error",
        opt2: "Hello",
        opt3: "no  output",
        opt4: "junk  value",
        ans: "Hello",
        code: `import sys
if sys.platform[:2]== 'wi':
	print("Hello")`

    },




    {
        qstn: "What will be the output of the following Python function?",
        opt1: "Error",
        opt2: "1",
        opt3: "2j",
        opt4: "1+2j",
        ans: "1+2j",
        code: "complex(1+2j)"

    },


    {
        qstn: "Which of the following functions do you use to write data in the binary format?",
        opt1: "write",
        opt2: "output",
        opt3: "dump",
        opt4: "send",
        ans: "dump	",
        code: ""

    },



    {
        qstn: "What will be the output of the following Python functions?",
        opt1: "ERROR",
        opt2: "1",
        opt3: "9",
        opt4: "6",
        ans: "1",
        code: `x=3
eval('x^2')`

    },



    {
        qstn: "Which of the following functions does not necessarily accept only iterables as arguments?",
        opt1: "enumerate()",
        opt2: "all()",
        opt3: "chr()",
        opt4: "max()",
        ans: "chr()",
        code: ""

    },



    {
        qstn: "Which of these is not a fundamental features of OOP?",
        opt1: "Encapsulation",
        opt2: "Inheritence",
        opt3: "Instantiation",
        opt4: "polymerphism",
        ans: "Instantiation",
        code: ""

    },




    {
        qstn: "_____ represents an entity in the real world with its identity and behaviour.",
        opt1: "A method",
        opt2: "An object",
        opt3: "A class",
        opt4: "An operator",
        ans: "An object",
        code: ""

    },


    {
        qstn: "_____ is used to create an object.",
        opt1: "class",
        opt2: "constructor",
        opt3: "user defined functions",
        opt4: "in-built functions",
        ans: "constructor",
        code: ""

    },



    {
        qstn: "What will be the output of the following Python code?",
        opt1: "6",
        opt2: "7",
        opt3: "Error",
        opt4: "0",
        ans: "7",
        code: `class change:
    def __init__(self, x, y, z):
        self.a = x + y + z
 
x = change(1,2,3)
y = getattr(x, 'a')
setattr(x, 'a', y+1)
print(x.a)`

    },



    {
        qstn: "What will be the output of the following Python code?",
        opt1: "12",
        opt2: "52",
        opt3: "13",
        opt4: "60",
        ans: "13",
        code: `class fruits:
    def __init__(self, price):
        self.price = price
obj=fruits(50)
 
obj.quantity=10
obj.bags=2
 
print(obj.quantity+len(obj.__dict__))`

    },


    {
        qstn: "What will be the output of given code?",
        opt1: "121",
        opt2: "129",
        opt3: "8",
        opt4: "None",
        ans: "129",
        code: "print(2**3+(5+6)**(1+1))"
    },

    {
        qstn: "Which of the following is not a class method?",
        opt1: "Non-static",
        opt2: "static",
        opt3: "bounded",
        opt4: "unbounded",
        ans: "Non-static",
        code: ""

    },



    {
        qstn: "What are the methods which begin and end with two underscore characters called?",
        opt1: "special methods",
        opt2: "in_built methods",
        opt3: "additional methods",
        opt4: "user defined methods",
        ans: "special methods",
        code: ""

    },





    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error",
        opt2: "Nothing is printed",
        opt3: "__str__ called",
        opt4: "__repr__ called",
        ans: "__str__ called",
        code: `class demo():
	def __repr__(self):
		return '__repr__ built-in function called'
	def __str__(self):
		return '__str__ built-in function called'
 s=demo()
 print(s)`

    },



    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error",
        opt2: "__str__ called",
        opt3: "__repr__ called",
        opt4: "Nothing is printed",
        ans: "__str__ called",
        code: `class demo():
	def __repr__(self):
		return '__repr__ built-in function called'
	def __str__(self):
		return '__str__  built-in function called'
 s=demo()
print(s)`

    },



    {
        qstn: " What is hasattr(obj,name) used for?",
        opt1: "To access the attribute of the object",
        opt2: "To delete an attribute",
        opt3: "To check if an attribute exists or not",
        opt4: "To set an attribute",
        ans: "To check if an attribute exists or not",
        code: ""

    },




    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Error as age isn't defined",
        opt2: "True",
        opt3: "False",
        opt4: "7",
        ans: "True",
        code: `class stud:
   def __init__(self, roll_no, grade):
      self.roll_no = roll_no
      self.grade = grade
   def display (self):
      print("Roll no : ", self.roll_no,  ", Grade: ", self.grade)
stud1 = stud(34, 'S')
stud1.age=7
print(hasattr(stud1, 'age'))`

    },





    {
        qstn: "What is delattr(obj,name) used for?",
        opt1: "To print deleted attribute",
        opt2: "To delete an attribute",
        opt3: "To check if an attribute is deleted or not",
        opt4: "To set an attribute",
        ans: "To delete an attribute",
        code: ""

    },





    {
        qstn: "What will be the output of the following Python code?",
        opt1: "Exception is thrown",
        opt2: "__main__",
        opt3: "Nothing is displayed",
        opt4: "Base class for all students",
        ans: "Base class for all students",
        code: `class stud:
   'Base class for all students'
   def __init__(self, roll_no, grade):
      self.roll_no = roll_no
      self.grade = grade
   def display (self):
      print("Roll no : ", self.roll_no,  ", Grade: ", self.grade)
print(student.__doc__)`

    },


    {
        qstn: "What does print(Test.__name__) display (assuming Test is the name of the class)?",
        opt1: "()",
        opt2: "Exception is thrown",
        opt3: "Test",
        opt4: "__main__",
        ans: "Test",
        code: ""
    }
];

let Html = [{
        qstn: "Which of the following is correct syntax for the \"Heading\" Element?",
        opt1: "<h1> </h1>",
        opt2: "<h4> </h4>",
        opt3: "<h6> </h6>",
        opt4: "All are Correct",
        ans: "All are Correct",
        code: ""
    },
    {
        qstn: "Considering the given code Which of the following is End Tag?",
        opt1: "<button>",
        opt2: "</button>",
        opt3: "<button></button>",
        opt4: "All of the above",
        ans: "</button>",
        code: "<button> Get Started </button>"

    },
    {
        qstn: "Which is the correct syntax for Paragraph Element?",
        opt1: "<p1> </p1>",
        opt2: "</p> <p>",
        opt3: "</p> </p>",
        opt4: "<p> </p>",
        ans: "<p> </p>",
        code: ""

    },
    {
        qstn: "Which is the incorrect syntax for Heading Element?",
        opt1: "<h1> </h1>",
        opt2: "<h2> </h2>",
        opt3: "<h6> </h6>",
        opt4: "<h7> </h7>",
        ans: "<h7> </h7>",
        code: ""

    },
    {
        qstn: "Consider the given code and choose correct option to make the code valid?",
        opt1: "</button>",
        opt2: "/button",
        opt3: "button",
        opt4: "<button>",
        ans: "/button",
        code: "<button> Go <__>"
    },

    {
        qstn: "HTML is what type of language?",
        opt1: "Scripting Language",
        opt2: "Markup Language",
        opt3: "Programming Language",
        opt4: "Network Protocol",
        ans: "Markup Language",
        code: ""

    },
    {
        qstn: "The year in which HTML was first proposed _______?",
        opt1: "1980",
        opt2: "1990",
        opt3: "1995",
        opt4: "2000",
        ans: "1990",
        code: ""

    },
    {
        qstn: "What is the full form of HTML?",
        opt1: "HyperText Mark Language",
        opt2: "HyperText Markup Language",
        opt3: "Hyper Tech Markup Language",
        opt4: "Hyper Teach Markup Language",
        ans: "HyperText Markup Language",
        code: ""

    },
    {
        qstn: "HTML web pages can be read and rendered by _______?",
        opt1: "Web Browser",
        opt2: "Server",
        opt3: "Interpreter",
        opt4: "Compiler",
        ans: "Web Browser",
        code: ""

    },
    {
        qstn: "HTML files are saved by default with the extension?",
        opt1: ".Html",
        opt2: ".html",
        opt3: ".h",
        opt4: ".HTML",
        ans: ".html",
        code: ""

    },
    {
        qstn: "Which attribute is used to provide a unique name to an HTML element?",
        opt1: "id",
        opt2: "class",
        opt3: "type",
        opt4: "None of the above",
        ans: "id",
        code: ""

    },
    {
        qstn: "Which of the following HTML tag is used to display the text with scrolling effect?",
        opt1: "<scroll>",
        opt2: "<marquee>",
        opt3: "<div>",
        opt4: "All of the above",
        ans: "<marquee>",
        code: ""

    },
    {
        qstn: "Which of the following attributes is used to open an hyperlink in new tab?",
        opt1: "tab",
        opt2: "href",
        opt3: "target",
        opt4: "ref",
        ans: "target",
        code: ""

    },
    {
        qstn: "Which of the following HTML element is used for creating an unordered list?",
        opt1: "<ui>",
        opt2: "<i>",
        opt3: "<li>",
        opt4: "<ul>",
        ans: "<ul>",
        code: ""

    },

    {
        qstn: "Consider the given code and fill the blank with correct option to create an hyperlink in HTML?",
        opt1: "<a>",
        opt2: "</a>",
        opt3: "/a",
        opt4: "a",
        ans: "/a",
        code: "<a href= \"www.mallareddyuniversity.ac.in\"> Malla Reddy University <__>"

    },

    {
        qstn: "Consider the given code and fill the space with correct option to insert an image in HTML?",
        opt1: "src",
        opt2: "url",
        opt3: "href",
        opt4: "All of the above",
        ans: "src",
        code: "<img __=\"https://mrulogo/2gfhi\">"

    },

    {
        qstn: "Who is the father of HTML?",
        opt1: "Tim Berners-Lee",
        opt2: "Sergey Brin",
        opt3: "Brendan Eich",
        opt4: "Rasmus Lerdorf",
        ans: "Tim Berners-Lee",
        code: ""

    },
    {
        qstn: "In which part of the HTML metadata is contained?",
        opt1: "head tag",
        opt2: "title tag",
        opt3: "html tag",
        opt4: "body tag",
        ans: "head tag",
        code: ""

    },
    {
        qstn: "How do we write comments in HTML?",
        opt1: "</-- comment -->",
        opt2: "</-- comment --/>",
        opt3: "<!-- comment -->",
        opt4: "<-- comment --!>",
        ans: "<!-- comment -->",
        code: ""

    },
    {
        qstn: "In HTML, which attribute is used to create a link that opens in a new window tab?",
        opt1: "src=\"_blank\"",
        opt2: "alt=\"_blank\"",
        opt3: "target=\"_self\"",
        opt4: "target=\"_blank\"",
        ans: "target=\"_blank\"",
        code: ""

    },

    {
        qstn: "Which of the following HTML tag is used to create an ordered list?",
        opt1: "<ol>",
        opt2: "<ul>",
        opt3: "<li>",
        opt4: "<oi>",
        ans: "<ol>",
        code: ""

    },
    {
        qstn: "The correct sequence of HTML tags for starting a webpage is?",
        opt1: "Head, Title, HTML, body",
        opt2: "HTML, Body, Title, Head",
        opt3: "HTML, Head, Title, Body",
        opt4: "HTML, Title, Head, Body",
        ans: "HTML, Head, Title, Body",
        code: ""

    },

    {
        qstn: "Which character is used to represent the closing of a tag in HTML?",
        opt1: "|",
        opt2: "!",
        opt3: "/",
        opt4: ".",
        ans: "/",
        code: ""

    },
    {
        qstn: "Which of the following tag is used to define options in a drop-down selection list?",
        opt1: "<select>",
        opt2: "<list>",
        opt3: "<dropdown>",
        opt4: "<option>",
        ans: "<option>",
        code: ""

    },
    {
        qstn: "Which of the following tag is used to add rows in the table?",
        opt1: "<td> and </td>",
        opt2: "<th> and </th>",
        opt3: "<tr> and </tr>",
        opt4: "All of the above",
        ans: "<tr> and </tr>",
        code: ""

    },
    {
        qstn: "The <hr> tag in HTML is used for?",
        opt1: "new line",
        opt2: "vertical line",
        opt3: "horizontal line",
        opt4: "new paragraph",
        ans: "horizontal line",
        code: ""

    },
    {
        qstn: "Which of the following HTML attribute is used to define inline styles?",
        opt1: "style",
        opt2: "class",
        opt3: "type",
        opt4: "id",
        ans: "style",
        code: ""

    },
    {
        qstn: "The tags in HTML are?",
        opt1: "case-insensitive",
        opt2: "case-sensitive",
        opt3: "in upper case",
        opt4: "in lowercase",
        ans: "case-insensitive",
        code: ""

    },
    {
        qstn: "Which of the following is the root tag of the HTML document?",
        opt1: "<body>",
        opt2: "<html>",
        opt3: "<title>",
        opt4: "<head>",
        ans: "<html>",
        code: ""

    },
    {
        qstn: "In HTML5, which of the following tag is used to initialize the document type?",
        opt1: "<!DOCTYPE html5>",
        opt2: "<!DOCTYPE html>",
        opt3: "<Doctype html5>",
        opt4: "<Doctype HTML>",
        ans: "<!DOCTYPE html>",
        code: ""
    },
    {
        qstn: "How many sizes of headers are available in HTML by default?",
        opt1: "6",
        opt2: "1",
        opt3: "4",
        opt4: "5",
        ans: "6",
        code: ""

    },
    {
        qstn: "Which of the following is correct about HTML?",
        opt1: "Html uses user defined tags",
        opt2: "uses tags defined within language",
        opt3: "Both A and B are correct",
        opt4: "None of the above",
        ans: "uses tags defined within language",
        code: ""

    },
    {
        qstn: "Which of the following tags doesn't require a closing tag?",
        opt1: "<br>",
        opt2: "<hr>",
        opt3: "Both",
        opt4: "None",
        ans: "Both",
        code: ""

    },
    {
        qstn: "What tag is used to render an image on a webpage?",
        opt1: "image",
        opt2: "src",
        opt3: "img",
        opt4: "None",
        ans: "img",
        code: ""

    },
    {
        qstn: "Colors are defined in HTML using?",
        opt1: "RGB Values",
        opt2: "HEX Values",
        opt3: "RGBA Values",
        opt4: "All the above",
        ans: "All the above",
        code: ""

    },
    {
        qstn: "Which of the following tags is used to indicate the page's start and endpoints?",
        opt1: "<doctype>",
        opt2: "<body>",
        opt3: "<html>",
        opt4: "<head>",
        ans: "<html>",
        code: ""

    },
    {
        qstn: "The CSS inside HTML elements used alongside style attribute is called?",
        opt1: "Internal",
        opt2: "External",
        opt3: "Inline",
        opt4: "All the above",
        ans: "Inline",
        code: ""

    },
    {
        qstn: "What is the default value of type attribute of <input> element?",
        opt1: "password",
        opt2: "mail",
        opt3: "character",
        opt4: "text",
        ans: "text",
        code: ""

    },
    {
        qstn: "What type of HTML form element is useful for extended comments?",
        opt1: "text",
        opt2: "textarea",
        opt3: "radio",
        opt4: "Both A & B",
        ans: "textarea",
        code: ""

    },
    {
        qstn: "Which of the following is Inline element?",
        opt1: "<img>",
        opt2: "<p>",
        opt3: "<div>",
        opt4: "All the above",
        ans: "<img>",
        code: ""

    },
    {
        qstn: "Which of the following is Block-level element?",
        opt1: "<div>",
        opt2: "<p>",
        opt3: "<form>",
        opt4: "All the above",
        ans: "All the above",
        code: ""

    },
    {
        qstn: "Consider the given code and select the correct option to fill the space?",
        opt1: "h1",
        opt2: "</h1>",
        opt3: "<h2>",
        opt4: "h2",
        ans: "h2",
        code: `<html>
               <body>
               <h2>
               Johny Johny!
               Yes Papa
               </___>
               </body>
               </html>`

    },
    {
        qstn: "Consider the given code and Fill the space with correct option?",
        opt1: "src",
        opt2: "href",
        opt3: "alt",
        opt4: "link",
        ans: "href",
        code: "<a ___=\"https: //triviaquiz.ccbp.tech\"> Go </a>"
    },
    {
        qstn: "What is the default value of target in <a> tag of HTML?",
        opt1: "_blank",
        opt2: "_parent",
        opt3: "_top",
        opt4: "_self",
        ans: "_self",
        code: ""

    },
    {
        qstn: "Which one of the following is a form element?",
        opt1: "text box",
        opt2: "radio button",
        opt3: "submit button",
        opt4: "All of these",
        ans: "All of these",
        code: ""

    },
    {
        qstn: "In the given code, India 4.0 is?",
        opt1: "heading",
        opt2: "paragraph",
        opt3: "Both A & B",
        opt4: "None of these",
        ans: "heading",
        code: `<!DOCTYPE html>
                <html>
                  <head></head>
                  <body>
                    <div class="box text-center">
                      <h1>India 4.0</h1>
                      <p>Spread the light.</p>
                    </div>
                  </body>
                </html>`
    },
    {
        qstn: "Choose the correct Html tag to make a text bold?",
        opt1: "<b>",
        opt2: "<bold>",
        opt3: "<bb>",
        opt4: "<bld>",
        ans: "<b>",
        code: ""

    },
    {
        qstn: "HTML documents are saved in?",
        opt1: "binary format",
        opt2: "ASCII text",
        opt3: "Machine Language",
        opt4: "None of these",
        ans: "ASCII text",
        code: ""

    },
    {
        qstn: "Which HTML tag is used to define italic text?",
        opt1: "<italic>",
        opt2: "<em>",
        opt3: "<i>",
        opt4: "<it>",
        ans: "<i>",
        code: ""

    },
    {
        qstn: "Which HTML tag is used to define marked or highlighted text?",
        opt1: "<highlight>",
        opt2: "<mark>",
        opt3: "<highlighted>",
        opt4: "<m>",
        ans: "<mark>",
        code: ""

    }
];

let Css = [{
        qstn: "Which of the following is universal Selector?",
        opt1: "*",
        opt2: ".",
        opt3: "#",
        opt4: "None",
        ans: "*",
        code: ""
    },
    {
        qstn: "Which of the following is \"ID\" Selector?",
        opt1: "*",
        opt2: ".",
        opt3: "#",
        opt4: "None",
        ans: "#",
        code: ""
    },
    {
        qstn: "Which of the following are units of relative length in CSS?",
        opt1: "em",
        opt2: "rem",
        opt3: "px",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "What parameter does the calc() function in CSS take?",
        opt1: "A sentence",
        opt2: "A mathematical",
        opt3: "A number",
        opt4: "None of the above",
        ans: "A mathematical",
        code: ""
    },
    {
        qstn: "How can we add more importance to a property/value than normal?",
        opt1: "!important",
        opt2: "important",
        opt3: "bold",
        opt4: "None of the above",
        ans: "!important",
        code: ""
    },
    {
        qstn: "Which CSS property specifies the painting area of the background?",
        opt1: "background-size",
        opt2: "background-clip",
        opt3: "background-image",
        opt4: "None of the above",
        ans: "background-clip",
        code: ""
    },
    {
        qstn: "What are the different types of gradients in CSS?",
        opt1: "Linear Gradients",
        opt2: "conic Gradients",
        opt3: "Radial Gradients",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "Which CSS property is used to create an image reflection?",
        opt1: "box-reflect",
        opt2: "image-reflect",
        opt3: "reflect-img",
        opt4: "None of the above",
        ans: "box-reflect",
        code: ""
    },
    {
        qstn: "The transparent keyword is equivalent to which RGBA() value in CSS?",
        opt1: "RGBA(0,0,0,1)",
        opt2: "RGBA(225,225,225,1)",
        opt3: "RGBA(0,0,0,0)",
        opt4: "RGBA(225,225,225,0)",
        ans: "RGBA(0,0,0,0)",
        code: ""
    },
    {
        qstn: "What function is used to insert values of a CSS variable?",
        opt1: "var()",
        opt2: "rand()",
        opt3: "varchar()",
        opt4: "calc()",
        ans: "var()",
        code: ""
    },
    {
        qstn: "What is the general syntax of writing the var() function?",
        opt1: "var(--name,value)",
        opt2: "var(--name)",
        opt3: "var(value)",
        opt4: "None of the above",
        ans: "var(--name,value)",
        code: ""
    },
    {
        qstn: "How many layout modes were there before the Flexbox Layout Module was introduced in CSS ?",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "4",
        code: ""
    },
    {
        qstn: "How can we change the background color of an element ?",
        opt1: "background-color",
        opt2: "color",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "Both A and B",
        code: ""
    },
    {
        qstn: "Which of the following can be achieved with CSS lists?",
        opt1: "Set different list item markers for ordered lists",
        opt2: "Set different list item markers for unordered lists",
        opt3: "Set an image as the list item marker",
        opt4: "all the above",
        ans: "all the above",
        code: ""
    },
    {
        qstn: "Which of the following CSS property specifies the type of list item marker ?",
        opt1: "list",
        opt2: "list-style-type",
        opt3: "ul",
        opt4: "ol",
        ans: "list-style-type",
        code: ""
    },
    {
        qstn: "What value should be passed to the width parameter if we want an element, say a table, to span the entire width of the screen ?",
        opt1: "100 %",
        opt2: "50 %",
        opt3: "0 %",
        opt4: "None of the above",
        ans: "100 %",
        code: ""
    },
    {
        qstn: "Which of the following properties is used to align text in CSS ?",
        opt1: "text-align",
        opt2: "Text-alignment",
        opt3: "text",
        opt4: "Text-position",
        ans: "text-align",
        code: ""
    },
    {
        qstn: "Which of the following is the correct approach to make a table responsive ?",
        opt1: "overflow-x: auto",
        opt2: "overflow-x: none",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "overflow-x: auto",
        code: ""
    },
    {
        qstn: "Which of the following CSS properties specifies the stack order of elements ?",
        opt1: "z-index",
        opt2: "Overlap",
        opt3: "No such specific property is present",
        opt4: "None of the above",
        ans: "z-index",
        code: ""
    },
    {
        qstn: "Which of the following CSS property creates a clipping region and specifies the visible area of the element ?",
        opt1: "visibility",
        opt2: "clip-path",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "clip-path",
        code: ""
    },
    {
        qstn: "What are the uses of CSS pseudo - elements?",
        opt1: "Style specified parts of an element.",
        opt2: "the first letter or line of an element.",
        opt3: "Insert content before or after the element.",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "How can we select elements with a specified attribute in CSS ?",
        opt1: "[attribute] selector",
        opt2: "[property] selector",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "[attribute] selector",
        code: ""
    },
    {
        qstn: "Which of the following are types of length units in CSS ?",
        opt1: "Absolute",
        opt2: "Relative",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "Both A and B",
        code: ""
    },
    {
        qstn: "How can we change the text color of an element ?",
        opt1: "background-color",
        opt2: "color",
        opt3: "Both A and B",
        opt4: "None",
        ans: "color",
        code: ""
    },
    {
        qstn: "In how many ways can CSS be written in ?",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "3",
        code: ""
    },
    {
        qstn: "What type of CSS is the following code snippet ?",
        opt1: "inline",
        opt2: "internal",
        opt3: "External",
        opt4: "None of the above",
        ans: "inline",
        code: "<h1 style = \"color:blue;\" > A Blue Heading < /h1>"
    },
    {
        qstn: "what type of CSS is generally recommended for designing large web pages ?",
        opt1: "inline",
        opt2: "internal",
        opt3: "External",
        opt4: "none of above",
        ans: "External",
        code: ""
    },
    {
        qstn: "Which HTML tag is used to declare internal CSS ?",
        opt1: "<style>",
        opt2: "<link>",
        opt3: "<script>",
        opt4: "None of above",
        ans: " <style>",
        code: ""
    },
    {
        qstn: "How can we select an element with a specific ID in CSS ?",
        opt1: "#",
        opt2: ".",
        opt3: "^",
        opt4: "None of above",
        ans: "#",
        code: ""
    },
    {
        qstn: "how can we select an element with a specific Class in CSS ?",
        opt1: "#",
        opt2: ".",
        opt3: "^",
        opt4: "None of above",
        ans: ".",
        code: ""
    },
    {
        qstn: "How can we write comments in CSS ?",
        opt1: "/* */",
        opt2: "//",
        opt3: "#",
        opt4: "All of the above",
        ans: "/* */",
        code: ""
    },
    {
        qstn: "In the given code snippet, in what order will the margins be added ?",
        opt1: "Top, Right, Bottom, Left",
        opt2: "Top, Left, Bottom, Right",
        opt3: "Top, Bottom, Right, Left",
        opt4: "Right, Left, Top, Bottom",
        ans: "Top, Right, Bottom, Left",
        code: "P { margin: 25 px 50 px 75 px 100 px; }"
    },
    {
        qstn: "Can negative values be allowed in padding property ?",
        opt1: "Yes",
        opt2: "No",
        opt3: "Depends on property",
        opt4: "None of the above",
        ans: "No",
        code: ""
    },
    {
        qstn: "The CSS property used to specify the transparency of an element is ?",
        opt1: "opacity",
        opt2: "visibility",
        opt3: "filter",
        opt4: "None of the above",
        ans: "opacity",
        code: ""
    },
    {
        qstn: "How can we specify the spacing between each letter in a text in CSS ?",
        opt1: "alpha-spacing",
        opt2: "letter-spacing",
        opt3: "character-spacing",
        opt4: "None of the above",
        ans: "letter-spacing",
        code: ""
    },
    {
        qstn: "Which of the following are valid ways to represent a color in CSS?",
        opt1: "A valid color name",
        opt2: "RGB values",
        opt3: "HEX values",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "Which of the following is the correct way to select all h1 headers in a div element ?",
        opt1: "div h1",
        opt2: "div h2",
        opt3: "h1",
        opt4: "None of the above",
        ans: "div h1",
        code: ""
    },
    {
        qstn: "We can make rounded borders around elements using which CSS element ?",
        opt1: "border-collapse",
        opt2: "border-round",
        opt3: "border-radius",
        opt4: "None of the above",
        ans: "border-radius",
        code: ""
    },
    {
        qstn: "How can we set the maximum width of the elements content box using CSS ?",
        opt1: "height property",
        opt2: "max-height property",
        opt3: "max-width property",
        opt4: "None of the above",
        ans: "max-width property",
        code: ""
    },
    {
        qstn: "Which CSS property is used to specify different border styles?",
        opt1: "border-style",
        opt2: "border",
        opt3: "Both A and B",
        opt4: "None of the above",
        ans: "Both A and B",
        code: ""
    },
    {
        qstn: "Which of the following property decifices the look and design of an outline ?",
        opt1: "outline-style",
        opt2: "outline",
        opt3: "outline-font",
        opt4: "None of the above",
        ans: "outline-style",
        code: ""
    },
    {
        qstn: "Which of the following are valid CSS position property values ?",
        opt1: "static",
        opt2: "relative",
        opt3: "fixed",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "What does the inherit value for a property do ?",
        opt1: "Inherits the value of the parent element",
        opt2: "Invalid property name",
        opt3: "changes the value of the parent element’ s propery",
        opt4: "None of the above",
        ans: "Inherits the value of the parent element",
        code: ""
    },
    {
        qstn: "Setting an inline - block in CSS requires which of the following properties ?",
        opt1: "display",
        opt2: "color",
        opt3: "block",
        opt4: "None of the above",
        ans: "display",
        code: ""
    },
    {
        qstn: "Which of the following CSS property is used for controlling the layout ?",
        opt1: "display",
        opt2: "color",
        opt3: "text",
        opt4: "None of the above",
        ans: "display",
        code: ""
    },
    {
        qstn: "Which of the following CSS property specifies the origin of the background image ?",
        opt1: "background-orgin",
        opt2: "background-size",
        opt3: "origin",
        opt4: "None of the above",
        ans: "background-orgin",
        code: ""
    },
    {
        qstn: "How are custom fonts defined using CSS ?",
        opt1: "@font-face rule",
        opt2: "Custom fonts cannot be defined",
        opt3: "src tags",
        opt4: "None of the above",
        ans: "@font-face rule",
        code: ""
    },
    {
        qstn: "Which of the following are parts of the CSS box model ?",
        opt1: "Margins",
        opt2: "Borders",
        opt3: "padding",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""
    },
    {
        qstn: "Which of the following components of the CSS box model are transprent ?",
        opt1: "padding",
        opt2: "margin",
        opt3: "Both A and B",
        opt4: "Content",
        ans: "Both A and B",
        code: ""
    },
    {
        qstn: "what will be the width of the div element given in the code?",
        opt1: "310 px",
        opt2: "350 px",
        opt3: "360 px",
        opt4: "None of the above",
        ans: "360 px",
        code: `div {
            Width: 310 px;
            Padding: 20 px;
            Border: 5 px solid blue;
            Margin: 0;
        }`
    }

];

let Js = [{
        qstn: "Which of the following is used to find the type of value ?",
        opt1: "type()",
        opt2: "type[]",
        opt3: "type{}",
        opt4: "typeof()",
        ans: "typeof()",
        code: ""

    },

    {
        qstn: "Javascript is an _______ language?",
        opt1: "Object-oriented",
        opt2: "Object-based",
        opt3: "Procedual",
        opt4: "None of the above",
        ans: "Object-oriented",
        code: ""

    },

    {
        qstn: "Which of the following keywords is used to define a variable in Javascript?",
        opt1: "Var",
        opt2: "Let",
        opt3: "both A and B",
        opt4: "None of the above",
        ans: "both A and B",
        code: ""

    },

    {
        qstn: "Which of the following methods is used to access HTML elements using Javascript?",
        opt1: "getElementbyId()",
        opt2: "getElementsByClassName()",
        opt3: "both A and B",
        opt4: "None of the above",
        ans: "both A and B",
        code: ""

    },

    {
        qstn: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        opt1: "Throw an error",
        opt2: "Ignores the statements",
        opt3: "give a warning",
        opt4: "None of the above",
        ans: "Throw an error",
        code: ""
    },

    {
        qstn: "Which of the following methods can be used to display data in some form using Javascript?",
        opt1: "document.write()",
        opt2: "console.log()",
        opt3: "window.alert()",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""

    },

    {
        qstn: "consider the given code and what will be the output?",
        opt1: "Compilation error",
        opt2: "14",
        opt3: "Runtime Error",
        opt4: "59",
        ans: "59",
        code: `<script type=\"text/javascript\">
                var a = 5 + \"9\";
                document.write(a);
                </script>`
    },

    {
        qstn: "Which one of the following also known as Conditional Expression:",
        opt1: "Alternative to if-else",
        opt2: "Switch statement",
        opt3: "If-then-else statement",
        opt4: "immediate if",
        ans: "immediate if",
        code: ""
    },

    {
        qstn: "In JavaScript, what is a block of statement?",
        opt1: "Conditional block",
        opt2: "number of statements together",
        opt3: "both conditional block and single statement",
        opt4: "block that contains a single statement",
        ans: "number of statements together",
        code: ""

    },

    {
        qstn: "When interpreter encounters an empty statements, what it will do:",
        opt1: "Shows a warning",
        opt2: "Prompts to complete the statement",
        opt3: "Throws an error",
        opt4: "Ignores the statements",
        ans: "Ignores the statements",
        code: ""

    },

    {
        qstn: "The function and var are known as?",
        opt1: "Keywords",
        opt2: "Data types",
        opt3: "Declaration statements",
        opt4: "Prototypes",
        ans: "Declaration statements",
        code: ""

    },

    {
        qstn: "consider the given code and what will be the output?",
        opt1: "An error is displayed",
        opt2: "An exception is thrown ",
        opt3: "0-10 are logged in console",
        opt4: "0-9 are logged in console",
        ans: "0-9 are logged in console",
        code: `var count =0;  
                while (count < 10) {
                    console.log(count);
                    count++;
                }`
    },

    {
        qstn: "consider the given code and what will be the output?",
        opt1: "9",
        opt2: "0",
        opt3: "8",
        opt4: "Undefined",
        ans: "8",
        code: `var x=8;  
                if (x > 9) {
                    document.write(9);
                }else {
                    document.write(x);
                }`
    },

    {
        qstn: "Which of the following variables takes precedence over the others if the names are the same?",
        opt1: "Global variable",
        opt2: "The local element",
        opt3: "The two of the above",
        opt4: "None of the above",
        ans: "The local element",
        code: ""

    },

    {
        qstn: "Which one of the following is the correct way for calling the JavaScript code?",
        opt1: "Preprocessor",
        opt2: "Triggering Event",
        opt3: "RMI",
        opt4: "Function/Method",
        ans: "Function/Method",
        code: ""

    },

    {
        qstn: "Which of the following type of a variable is volatile?",
        opt1: "Mutable variable",
        opt2: "Dynamic variable",
        opt3: "Volatile variable",
        opt4: "Immutable variable",
        ans: "Mutable variable",
        code: ""

    },

    {
        qstn: "Which of the following option is used as hexadecimal literal beginning?",
        opt1: "00",
        opt2: "0x",
        opt3: "0X",
        opt4: "Both 0x and 0X",
        ans: "Both 0x and 0X",
        code: ""

    },

    {
        qstn: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        opt1: "Prints an exception error",
        opt2: "Prints an overflow error",
        opt3: "Displays Infinity",
        opt4: "Prints the value as such",
        ans: "Displays Infinity",
        code: ""

    },

    {
        qstn: "In the JavaScript, which one of the following is not considered as an error:",
        opt1: "Syntax error",
        opt2: "Missing of semicolons",
        opt3: "Division by zero",
        opt4: "Missing of Bracket",
        ans: "Division by zero",
        code: ""

    },

    {
        qstn: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        opt1: "toExponential()",
        opt2: "toFixed()",
        opt3: "toPrecision()",
        opt4: "toPrecision()",
        ans: "toFixed()",
        code: ""

    },

    {
        qstn: "Which of the following number object function returns the value of the number?",
        opt1: "toString()",
        opt2: "valueOf()",
        opt3: "toLocaleString()",
        opt4: "toPrecision()",
        ans: "valueOf()",
        code: ""

    },

    {
        qstn: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        opt1: "slice()",
        opt2: "split()",
        opt3: "substr()",
        opt4: "search()",
        ans: "substr()",
        code: ""

    },

    {
        qstn: "In JavaScript the x === y statement implies that ____?",
        opt1: "x and y are not same at all",
        opt2: "x and y are equal in value only",
        opt3: "Both are equal in value & data type",
        opt4: "None of the above options",
        ans: "Both are equal in value & data type",
        code: ""

    },

    {
        qstn: "Choose the correct snippet from the following to check if the variable a is not equal the NULL:",
        opt1: "if(a!==null)",
        opt2: "if (a!)",
        opt3: "if(a!null)",
        opt4: "if(a!=null)",
        ans: "if(a!==null)",
        code: ""

    },

    {
        qstn: `To convert a text \"human\" into string Which is the correct way from the following to do so?`,
        opt1: "toString()",
        opt2: "String(human)",
        opt3: "Both A & B",
        opt4: "None of these",
        ans: "Both A & B",
        code: ""

    },

    {
        qstn: "In JavaScript, what will be used for calling the function definition expression?",
        opt1: "Function prototype",
        opt2: "Function literal",
        opt3: "Function calling",
        opt4: "Function declaration",
        ans: "Function literal",
        code: ""

    },

    {
        qstn: "Which of the following one is the property of the primary expression?",
        opt1: "Contains only keywords",
        opt2: "basic expressions",
        opt3: "contains variable references",
        opt4: "stand-alone expressions",
        ans: "stand-alone expressions",
        code: ""

    },

    {
        qstn: "Which one of the following is used for the calling a function or a method in the JavaScript?",
        opt1: "Property Access Expression",
        opt2: "Functional expression",
        opt3: "Invocation expression",
        opt4: "Primary expression",
        ans: "Invocation expression",
        code: ""

    },

    {
        qstn: `The \'new Point(3, 2)\', is a kind of _______ expression`,
        opt1: "Object Creation Expression",
        opt2: "Primary Expression",
        opt3: "Invocation Expression",
        opt4: "Constructor Calling Expression",
        ans: "Object Creation Expression",
        code: ""

    },

    {
        qstn: "Which one of the following operator is used to check weather a specific property exists or not?",
        opt1: "Exists",
        opt2: "exist",
        opt3: "within",
        opt4: "in",
        ans: "in",
        code: ""

    },

    {
        qstn: "Which one of the following is an ternary operator?",
        opt1: "? :",
        opt2: ": ?",
        opt3: "- :",
        opt4: "+ :",
        ans: "? :",
        code: ""

    },

    {
        qstn: "Which of the following is the correct output for the following JavaScript code?",
        opt1: "False",
        opt2: "True",
        opt3: "Runtime error",
        opt4: "Compilation error",
        ans: "True",
        code: `function display1(option)   {
    
                    return (option ? \"True\" : \"False\");
                }
                let ans = true;
                console.log(display1(ans));`
    },

    {
        qstn: "Which one of the following is correct output for the following given JavaScript code?",
        opt1: "123.56",
        opt2: "Taller",
        opt3: "190",
        opt4: "Little shorter",
        ans: "Taller",
        code: `function height(){
                var height = 123.56;
                var type = (height >= 190) ? \"Taller\" : \"Little short\";
                return type;
            }
            height()`
    },

    {
        qstn: "Which one of the following is correct output for the following given JavaScript code?",
        opt1: "Error",
        opt2: "clean:Italy",
        opt3: "clean:India",
        opt4: "undefined",
        ans: "clean:India",
        code: `function outputfun(object) {
                    var place = (object === \"India\") ? object : \"Italy\";
                    return \"clean:\" + place;
                }
                console.log(outputfun(\"India\"));`
    },

    {
        qstn: "What we will get if we compare the 1 with 8 using the less than operator?",
        opt1: "False",
        opt2: "True",
        opt3: "false",
        opt4: "Undefined",
        ans: "false",
        code: ""
    },

    {
        qstn: "In a case, where the value of the operator is NULL , the typeof returned by the unary operator is___?",
        opt1: "undefined",
        opt2: "string",
        opt3: "boolean",
        opt4: "object",
        ans: "object",
        code: ""

    },

    {
        qstn: "Which one of the following is not a keyword:",
        opt1: "if",
        opt2: "with",
        opt3: "debugger",
        opt4: "use strict",
        ans: "use strict",
        code: ""

    },

    {
        qstn: "What are the three important manipulations for a loop on a loop variable?",
        opt1: "Updation, Incrementation, Initialization",
        opt2: "Initialization, Testing, Incrementation",
        opt3: "Testing, Updation, Testing",
        opt4: "Initialization, Testing, Updation",
        ans: "Initialization, Testing, Updation",
        code: ""

    },

    {
        qstn: "What if we define a for loop and it removes one of the properties that has not yet been enumerated?",
        opt1: "The removed property will be stored in a cache",
        opt2: "The loop will not run at all",
        opt3: "That property will be enumerated",
        opt4: "That specific property will not be enumerated",
        ans: "That specific property will not be enumerated",
        code: ""

    },

    {
        qstn: "Which one of the following is the correct output for the given JavaScript code?",
        opt1: "0",
        opt2: "1",
        opt3: "2",
        opt4: "Error",
        ans: "2",
        code: `const object1 ={};  
                a = Symbol('a');
                b = Symbol.for('b');
                object1[a] = 'harry';
                object1[b] = 'derry';
                const objectSymbols = Object.getOwnPropertySymbols(object1);
                console.log(objectSymbols.length);`
    },

    {
        qstn: " What is the basic purpose of the toLocateString() method?",
        opt1: "returns a localised object representation",
        opt2: "returns a localized string representation of object",
        opt3: "return a local time in the string format",
        opt4: "return a parsed string",
        ans: "returns a localized string representation of object",
        code: ""

    },

    {
        qstn: "A set of unordered properties that, has a name and value is called______?",
        opt1: "String",
        opt2: "Array",
        opt3: "Serialized Object",
        opt4: "Object",
        ans: "Object",
        code: ""

    },

    {
        qstn: "A collection of elements of the same data type which may either in order or not, is called _____?",
        opt1: "String",
        opt2: "Array",
        opt3: "Serialized Object",
        opt4: "Object",
        ans: "Array",
        code: ""

    },

    {
        qstn: "Every object contains three object attributes that are _______?",
        opt1: "Prototype, class, objects extensible flag",
        opt2: "Prototype, class, objects parameters",
        opt3: "Class, parameters, objects extensible flag",
        opt4: "Native object, Interfaces, Objects extensible flag",
        ans: "Prototype, class, objects extensible flag",
        code: ""

    },

    {
        qstn: "The linkage of a set of prototype objects is known as______?",
        opt1: "prototype stack",
        opt2: "prototype",
        opt3: "prototype class",
        opt4: "prototype chain",
        ans: "prototype chain",
        code: ""

    },

    {
        qstn: "What will be the output of the following JavaScript code?",
        opt1: "[1, 2, 3],[4,5,6,7,8,9,10]",
        opt2: "raise an Error",
        opt3: "[1,2,3,4,5,6,7,8,9,10]",
        opt4: "It will print nothing",
        ans: "[1,2,3,4,5,6,7,8,9,10]",
        code: `<script>  
                var string1 = [1, 2, 3];
                var string2 = [4, 5, 6, 7, 8, 9, 10];
                var result = string1.concat(string2);
                document.writeln(result); 
                </script>`
    },

    {
        qstn: "If a function which does not return a value is known as _____?",
        opt1: "Static function",
        opt2: "Procedures",
        opt3: "Method",
        opt4: "Dynamic function",
        ans: "Procedures",
        code: ""

    },

    {
        qstn: "The execution of a function stops when the program control encounters the _________ statement in the body of the function?",
        opt1: "return statement",
        opt2: "continue statement",
        opt3: "break statement",
        opt4: "goto statement",
        ans: "return statement",
        code: ""

    },

    {
        qstn: "What happens if the return statement has no related expression?",
        opt1: "It will return a undefined value",
        opt2: "It will throw a exception",
        opt3: "t will return the 0 as the value",
        opt4: "It will throw a error",
        ans: "It will return a undefined value",
        code: ""

    },

    {
        qstn: "Which one of the following is not a example of closures?",
        opt1: "Graphics",
        opt2: "Variables",
        opt3: "Functions",
        opt4: "Objects",
        ans: "Graphics",
        code: ""
    }
];

let Bs = [{
        qstn: "Which of the following is used to align the text center ?",
        opt1: "textcenter",
        opt2: "text-center",
        opt3: "text_center",
        opt4: "text center",
        ans: "text-center",
        code: ""
    },
    {
        qstn: "Which of the following statements is/are correct about Bootstrap 4?",
        opt1: "It provides a free front - end framework",
        opt2: "It is a completely open - source product",
        opt3: "It gives the ability to create responsive designs",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""

    },
    {
        qstn: "Who is/are the developers of Bootstrap?",
        opt1: "Mark Otto and Jacob Thornton",
        opt2: "Tim Berners - Lee",
        opt3: "Håkon Wium Lie",
        opt4: "None of the above",
        ans: "Mark Otto and Jacob Thornton",
        code: ""

    },
    {
        qstn: "What is the font - size of <h3> in Bootstrap 4 by default?",
        opt1: "19 px",
        opt2: "28 px",
        opt3: "20 px",
        opt4: "None of the above",
        ans: "28 px",
        code: ""

    },
    {
        qstn: "Consider the code and What does the following meta tag do?",
        opt1: "browser to look for media queries in the CSS file",
        opt2: "Makes the web page responsive automatically",
        opt3: "Prevents browsers from scaling desktop websites on mobile",
        opt4: "None of the above options are correct",
        ans: "Prevents browsers from scaling desktop websites on mobile",
        code: "<meta name = \"viewport\" content = \"width=device-width, initial-scale=1\" >"

    },
    {
        qstn: "Why is the Glyphicons used in Bootstrap 4?",
        opt1: "Slideshow",
        opt2: "Graphic images",
        opt3: "Animations",
        opt4: "For the purpose of providing different icons",
        ans: "For the purpose of providing different icons",
        code: ""

    },
    {
        qstn: "Which of the following class can be used to make the images and other content in a web page automatically adjusts to fit the size of the screen?",
        opt1: ".img-rounded",
        opt2: ".img-fluid",
        opt3: ".img-circle",
        opt4: "None of the above",
        ans: ".img-fluid",
        code: ""

    },
    {
        qstn: "Which of the following is odd?",
        opt1: "justify-content-start",
        opt2: "justify-content-end",
        opt3: "justify-content-center",
        opt4: "None of the above",
        ans: "None of the above",
        code: ""

    },
    {
        qstn: "Which of the following is the correct heading size for <h5> in Bootstrap 4?",
        opt1: "20 px",
        opt2: "16 px",
        opt3: "12 px",
        opt4: "None of the above",
        ans: "20 px",
        code: ""

    },
    {
        qstn: "Which of the following layout can be used to provide 100% width in Bootstrap 4?",
        opt1: "Fluid Layout",
        opt2: "Fixed Layout",
        opt3: "Both opt1 and opt2 are correct.",
        opt4: "None of the above options is correct",
        ans: "Fluid Layout",
        code: ""

    },
    {
        qstn: "Which among the following grid classes can be used for desktop?",
        opt1: "md",
        opt2: "sm",
        opt3: "xs",
        opt4: "None of the above",
        ans: "md",
        code: ""

    },
    {
        qstn: "In Bootstrap 4, the contents can be placed within which of the following elements?",
        opt1: "Columns",
        opt2: "Containers",
        opt3: "Rows",
        opt4: "None of the above",
        ans: "Columns",
        code: ""

    },
    {
        qstn: " How many types of container classes are there in Bootstrap 4?",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "None of the above",
        ans: "2",
        code: ""

    },
    {
        qstn: "Which amongst the following version of Bootstrap uses the flat design?",
        opt1: "Bootstrap",
        opt2: "Bootstrap 3",
        opt3: "Bootstrap 4",
        opt4: "None of the above",
        ans: "Bootstrap 3",
        code: ""

    },
    {
        qstn: "Which of the following options is/are supported in Bootstrap 4?",
        opt1: "Sass",
        opt2: "Flexbox",
        opt3: "Both opt1 and opt2 are correct ",
        opt4: "None of the above",
        ans: "Both opt1 and opt2 are correct",
        code: ""

    },
    {
        qstn: "Which of the following is correct about data - delay Data attribute of Tooltip Plugin?",
        opt1: "Sets the default title value",
        opt2: "Defines how the tooltip is triggered",
        opt3: "Defines default content value",
        opt4: "Delays showing and hiding the tooltip in ms",
        ans: "Delays showing and hiding the tooltip in ms",
        code: ""

    },
    {
        qstn: "Which of the following bootstrap styles are used to create a vertical pills navigation?",
        opt1: ".nav, .nav-tabs",
        opt2: ".nav, .nav-pills",
        opt3: ".nav, .nav-pills, .nav-stacked",
        opt4: ".nav, .nav-tabs, .nav-justified",
        ans: ".nav, .nav-pills, .nav-stacked",
        code: ""

    },
    {
        qstn: " Which of the following bootstrap style is used to add text to .navbar?",
        opt1: ".navbar-text",
        opt2: ".text",
        opt3: ".form-text",
        opt4: "None of the above.",
        ans: ".navbar-text",
        code: ""

    },
    {
        qstn: " Which of the following is the default layout of a bootstrap form?",
        opt1: ".vertical",
        opt2: ".inline",
        opt3: ".horizontal",
        opt4: "None of the above.",
        ans: ".vertical",
        code: ""

    },
    {
        qstn: "Which of the following is correct about Bootstrap?",
        opt1: "Bootstrap's responsive CSS adjusts to Desktops, Tablets and Mobiles.",
        opt2: "Provides a clean and uniform solution for building an interface for developers.",
        opt3: "It contains beautiful and functional built-in components which are easy to customize.",
        opt4: "All of the above.",
        ans: "All of the above.",
        code: ""

    },
    {
        qstn: "How many columns are allowed in a bootstrap grid system?",
        opt1: "2",
        opt2: "12",
        opt3: "3",
        opt4: "5",
        ans: "12",
        code: ""

    },
    {
        qstn: "Which of the following class in bootstrap is used to create a big box for calling extra attention?",
        opt1: ".box",
        opt2: ".container",
        opt3: ".container-fluid",
        opt4: ".jumbotron",
        ans: ".jumbotron",
        code: ""

    },
    {
        qstn: "The plugin used to create a cycle through elements as a slideshow is -",
        opt1: "slideshow",
        opt2: "scrollspy",
        opt3: "carousel",
        opt4: "None of the above",
        ans: "carousel",
        code: ""

    },
    {
        qstn: "Which of the following class in Bootstrap is used to create a dropdown menu?",
        opt1: ".dropdown",
        opt2: ".select",
        opt3: ".select-list",
        opt4: "None of the above",
        ans: ".dropdown",
        code: ""

    },
    {
        qstn: "Which of the following plugin in Bootstrap is used to create a modal window?",
        opt1: "popup",
        opt2: "alert",
        opt3: "modal",
        opt4: "window",
        ans: "modal",
        code: ""

    },
    {
        qstn: "Which of the following class in Bootstrap is used to create basic pagination?",
        opt1: ".page",
        opt2: ".pagin",
        opt3: ".paginate",
        opt4: ".pagination",
        ans: ".pagination",
        code: ""

    },
    {
        qstn: "Which of the following class in Bootstrap is used to create a badge?",
        opt1: ".tag",
        opt2: ".badge",
        opt3: ".page",
        opt4: ".flag",
        ans: ".badge",
        code: ""

    },
    {
        qstn: "Glyphicons in Bootstrap are used for -",
        opt1: "Using different icons on a webpage such as print, envelope, etc.",
        opt2: "Removing different icons on the page",
        opt3: "Selecting different icons on the page",
        opt4: "None of the above",
        ans: "Using different icons on a webpage such as print, envelope, etc.",
        code: ""

    },
    {
        qstn: "The class \"xs\" in Bootstrap is used for -",
        opt1: "tablets",
        opt2: "phones",
        opt3: "desktop",
        opt4: "All of the above",
        ans: "phones",
        code: ""

    },
    {
        qstn: "Which of the following statement is correct about the Bootstrap wells?",
        opt1: "By default, the size of wells is medium.",
        opt2: "Using .well-sm and .well-lg classes, we can change the size of wells.",
        opt3: "The .well-sm class is for small wells",
        opt4: "All of the above",
        ans: "All of the above",
        code: ""

    },
    {
        qstn: "Which of the following set of classes in the Bootstrap grid system used to define the screen size?",
        opt1: "small, xs, lg, extra-large",
        opt2: "xs, medium, lg, sm",
        opt3: "sm, mg, lg",
        opt4: "xs, sm, md, lg",
        ans: "xs, sm, md, lg",
        code: ""

    },
    {
        qstn: "default size of H5 bootstrap heading?",
        opt1: "14px",
        opt2: "16px",
        opt3: "18px",
        opt4: "20px",
        ans: "14px",
        code: ""

    },
    {
        qstn: "default size of H5 bootstrap heading?",
        opt1: "18px",
        opt2: "24px",
        opt3: "30px",
        opt4: "26px",
        ans: "24px",
        code: ""

    },
    {
        qstn: "which class creates a list of items?",
        opt1: "Lst-group",
        opt2: "List-group",
        opt3: "List-grp",
        opt4: "Menu-group",
        ans: "List-group",
        code: ""

    },
    {
        qstn: "medium devices are defined as having a screen width from?",
        opt1: "900 Pixels To 1000 Pixels",
        opt2: "768 Pixels To 991 Pixels",
        opt3: "512 Pixels To 2048 Pixels",
        opt4: "992 Pixels To 1199 Pixels",
        ans: "992 Pixels To 1199 Pixels",
        code: ""

    },
    {
        qstn: "sass stands for?",
        opt1: "Scripting awesome Stylesheets",
        opt2: "Scripting awesome Spreadsheets",
        opt3: "Syntactically awesome Stylesheets",
        opt4: "Syntactically awesome Spreadsheets",
        ans: "Syntactically awesome Stylesheets",
        code: ""

    },
    {
        qstn: "Bootstrap is used for?",
        opt1: "Data",
        opt2: "IoT",
        opt3: "Bigdata",
        opt4: "Web applications",
        ans: "Web applications",
        code: ""

    },
    {
        qstn: "Which of the following is correct about the Bootstrap Grid System?",
        opt1: "Rows must be placed within a .container class for proper alignment and padding.",
        opt2: "Use rows to create horizontal groups of columns.",
        opt3: "Content should be placed within the columns, and only columns may be the immediate children of rows.",
        opt4: "All of the above.",
        ans: "All of the above.",
        code: ""

    },
    {
        qstn: "Which of the following is correct Bootstrap utility to change the color of text to yellow?",
        opt1: "text-danger",
        opt2: "text-primary",
        opt3: "text-warning",
        opt4: "text-secondary",
        ans: "text-warning",
        code: ""

    },
    {
        qstn: "Which contextual class is used to create an orange text color?",
        opt1: ".txt-orange",
        opt2: ".txt-warning",
        opt3: ".text-warning",
        opt4: ".bg-warning",
        ans: ".text-warning",
        code: ""

    },
    {
        qstn: "Which of the following is the correct syntax to insert search icon?",
        opt1: "<span class =\"glyph glyphicon-search\"></span>",
        opt2: "<span class =\"glyphicon glyph-search\"></span>",
        opt3: "<span class =\"glyphicon glyphicon-search\"></span>",
        opt4: "<span class =\"glyphicon-search\"></span>",
        ans: "<span class =\"glyphicon glyphicon-search\"></span>",
        code: ""

    },
    {
        qstn: "Which of the following class is used to add a heading to the panel?",
        opt1: ".panel-head",
        opt2: ".panel-header",
        opt3: ".panel-heading",
        opt4: ".panel-content",
        ans: ".panel-heading",
        code: ""

    },
    {
        qstn: "Which attribute is used to create a tooltip?",
        opt1: "data-bs-toggle=\"modal\"",
        opt2: "data-bs-toggle=\"popup\"",
        opt3: "data-bs-toggle=\"collapse\"",
        opt4: "data-bs-toggle=\"tooltip\"",
        ans: "data-bs-toggle=\"tooltip\"",
        code: ""

    },
    {
        qstn: "Which of the following is correct about data-animation Data attribute of Tooltip Plugin?",
        opt1: "Applies a CSS fade transition to the tooltip.",
        opt2: "Inserts HTML into the tooltip.",
        opt3: "Specifies how to position the tooltip",
        opt4: "Delegates to the specified targets.",
        ans: "Applies a CSS fade transition to the tooltip.",
        code: ""

    },
    {
        qstn: "Which of the following is correct about data-delay Data attribute of Tooltip Plugin?",
        opt1: "Sets the default title value if the title attribute isn't present.",
        opt2: "Defines how the tooltip is triggered.",
        opt3: "Defines default content value if data-content attribute isn't present",
        opt4: "Delays showing and hiding the tooltip in ms.",
        ans: "Delays showing and hiding the tooltip in ms.",
        code: ""

    },

    {
        qstn: "The class in Bootstrap which is used to specify the collapsible elements is -",
        opt1: ".collapse",
        opt2: ".carousel",
        opt3: ".pager",
        opt4: "None of the above",
        ans: ".collapse",
        code: ""

    },
    {
        qstn: "Which of the following is correct method to add a hi button?",
        opt1: "<button class =\"btn btn-success\">hi</button>",
        opt2: "<button class =\"btn button-success\">hi</button>",
        opt3: "<button class =\"button btn-success\">hi</button>",
        opt4: "<button class =\"button btn-primary\">hi</button>",
        ans: "<button class =\"btn btn-success\">hi</button>",
        code: ""

    },
    {
        qstn: "Bootstrap's grid system allows up to _____ columns across the page.",
        opt1: "12",
        opt2: "13",
        opt3: "14",
        opt4: "11",
        ans: "12",
        code: ""

    },
    {
        qstn: "Which class is use to display black navigation bar?",
        opt1: ".nav-pills",
        opt2: ".navbar-inverse",
        opt3: ".nav-stacked",
        opt4: "None of the above",
        ans: ".navbar-inverse",
        code: ""

    },
    {
        qstn: "Which of the following is true about Jumbotron?",
        opt1: "It displays as grey box",
        opt2: "It increase the size of headings",
        opt3: "Both of the above",
        opt4: "None of the above",
        ans: "Both of the above",
        code: ""

    }

];


let homeEl = document.getElementById("home");
let playBtnEl = document.getElementById("playBtn");
let gameEl = document.getElementById("game");
let headEl = document.getElementById("head");
let opt1El = document.getElementById("opt1");
let opt2El = document.getElementById("opt2");
let opt3El = document.getElementById("opt3");
let opt4El = document.getElementById("opt4");
let countqstnEl = document.getElementById("countqstn");
let bottomEl = document.getElementById("bottom");
let scoreEl = document.getElementById("score");
let backBtn = document.getElementById("backBtn");
let gameScoreEl = document.getElementById("gameScore");
let totalScore = document.getElementById("scoreTotal");
let coursePyBtn = document.getElementById("coursePy");
let courseHtmlBtn = document.getElementById("courseHtml");
let courseCssBtn = document.getElementById("courseCss");
let courseJsBtn = document.getElementById("courseJs");
let courseBsBtn = document.getElementById("courseBs");
let langEl = document.getElementById("lang");
let popEl = document.getElementById("pop");
let popinEl = document.getElementById("popin");
let rulesEl = document.getElementById("rules");
let examBtn = document.getElementById("exam");
let checkBoxEl = document.getElementById("checkBox");
let nxtBtn = document.getElementById("nxtBtn");

let ans;
let selLang;
let randNum;
let count = 0;
let checkBox = false;

backBtn.onclick = function() {
    window.location.reload();
};

function wrong() {
    popEl.classList.add("d-none");
    let percent = (parseInt(gameScoreEl.textContent) / 10) * 100;
    scoreEl.textContent = percent;
    bottomEl.classList.add("d-none");
    totalScore.classList.remove("d-none");
    scoreEl.classList.remove("d-none");
    backBtn.classList.remove("d-none");
    gameEl.classList.remove("d-none");
}

let terminate = () => {
    window.location.reload();
};

function displayqstns() {
    langEl.classList.add("d-none");
    gameEl.classList.remove("d-none");
    bottomEl.classList.remove("d-none");
    nxtBtn.classList.add("d-none");
    window.addEventListener("blur", terminate);
    opt1El.disabled = false;
    opt2El.disabled = false;
    opt3El.disabled = false;
    opt4El.disabled = false;
    popEl.classList.add("d-none");
    opt1El.style.backgroundColor = "navy";
    opt2El.style.backgroundColor = "navy";
    opt3El.style.backgroundColor = "navy";
    opt4El.style.backgroundColor = "navy";
    randNum = Math.ceil(Math.random() * 99);
    if (randNum >= 50) {
        randNum = parseInt(randNum / 2);
    }
    count = count + 1;
    if (count < 11) {
        if (selLang === "Python") {
            countqstnEl.textContent = count;
            headEl.textContent = Python[randNum].qstn;
            opt1El.textContent = Python[randNum].opt1;
            opt2El.textContent = Python[randNum].opt2;
            opt3El.textContent = Python[randNum].opt3;
            opt4El.textContent = Python[randNum].opt4;
            ans = Python[randNum].ans;
            if (Python[randNum].code !== "") {
                popEl.classList.remove("d-none");
                popinEl.textContent = Python[randNum].code;

            }

        } else if (selLang === "Html") {
            countqstnEl.textContent = count;
            headEl.textContent = Html[randNum].qstn;
            opt1El.textContent = Html[randNum].opt1;
            opt2El.textContent = Html[randNum].opt2;
            opt3El.textContent = Html[randNum].opt3;
            opt4El.textContent = Html[randNum].opt4;
            ans = Html[randNum].ans;
            if (Html[randNum].code !== "") {
                popEl.classList.remove("d-none");
                popinEl.textContent = Html[randNum].code;

            }

        } else if (selLang === "Css") {
            countqstnEl.textContent = count;
            headEl.textContent = Css[randNum].qstn;
            opt1El.textContent = Css[randNum].opt1;
            opt2El.textContent = Css[randNum].opt2;
            opt3El.textContent = Css[randNum].opt3;
            opt4El.textContent = Css[randNum].opt4;
            ans = Css[randNum].ans;
            if (Css[randNum].code !== "") {
                popEl.classList.remove("d-none");
                popinEl.textContent = Css[randNum].code;

            }

        } else if (selLang === "Js") {
            countqstnEl.textContent = count;
            headEl.textContent = Js[randNum].qstn;
            opt1El.textContent = Js[randNum].opt1;
            opt2El.textContent = Js[randNum].opt2;
            opt3El.textContent = Js[randNum].opt3;
            opt4El.textContent = Js[randNum].opt4;
            ans = Js[randNum].ans;
            if (Js[randNum].code !== "") {
                popEl.classList.remove("d-none");
                popinEl.textContent = Js[randNum].code;

            }

        } else if (selLang === "Bs") {
            countqstnEl.textContent = count;
            headEl.textContent = Bs[randNum].qstn;
            opt1El.textContent = Bs[randNum].opt1;
            opt2El.textContent = Bs[randNum].opt2;
            opt3El.textContent = Bs[randNum].opt3;
            opt4El.textContent = Bs[randNum].opt4;
            ans = Bs[randNum].ans;
            if (Bs[randNum].code !== "") {
                popEl.classList.remove("d-none");
                popinEl.textContent = Bs[randNum].code;

            }
        }

    } else {
        wrong();

    }

}


let result = function(event) {
    event.preventDefault();
    nxtBtn.classList.remove("d-none")
    opt1El.disabled = true;
    opt2El.disabled = true;
    opt3El.disabled = true;
    opt4El.disabled = true;

    if (event.target.textContent.trim() === ans.trim()) {
        gameScoreEl.textContent = parseInt(gameScoreEl.textContent) + 1;
        event.target.style.backgroundColor = "green";
    } else {
        if (ans.trim() === opt1El.textContent.trim()) {
            opt1El.style.backgroundColor = "green";
        } else if (ans.trim() === opt2El.textContent.trim()) {
            opt2El.style.backgroundColor = "green";
        } else if (ans.trim() === opt3El.textContent.trim()) {
            opt3El.style.backgroundColor = "green";
        } else if (ans.trim() === opt4El.textContent.trim()) {
            opt4El.style.backgroundColor = "green";
        }
        event.target.style.backgroundColor = "orange";
        // setTimeout(function() {
        //     opt1El.disabled = false;
        //     opt2El.disabled = false;
        //     opt3El.disabled = false;
        //     opt4El.disabled = false;
        //     displayqstns();
        // }, 2000);
    }
}

opt1El.addEventListener("click", result) || opt2El.addEventListener("click", result) || opt3El.addEventListener("click", result) || opt4El.addEventListener("click", result);
nxtBtn.addEventListener("click", displayqstns);


checkBoxEl.addEventListener("change", function() {
    if (checkBox) {
        checkBox = false;
    } else {
        checkBox = true;
    }
    examBtn.disabled = !(checkBox);
});

examBtn.addEventListener("click", function() {
    rulesEl.classList.add("d-none");
    displayqstns();
});

coursePyBtn.onclick = function(event) {
    selLang = "Python";
    langEl.classList.add("d-none");
    rulesEl.classList.remove("d-none");
};

courseHtmlBtn.onclick = function(event) {
    selLang = "Html";
    langEl.classList.add("d-none");
    rulesEl.classList.remove("d-none");

};

courseCssBtn.onclick = function(event) {
    selLang = "Css";
    langEl.classList.add("d-none");
    rulesEl.classList.remove("d-none");

};

courseJsBtn.onclick = function(event) {
    selLang = "Js";
    langEl.classList.add("d-none");
    rulesEl.classList.remove("d-none");

};

courseBsBtn.onclick = function(event) {
    selLang = "Bs";
    langEl.classList.add("d-none");
    rulesEl.classList.remove("d-none");

};

playBtnEl.onclick = function() {
    langEl.classList.remove("d-none");
    totalScore.classList.add("d-none");
    scoreEl.classList.add("d-none");
    backBtn.classList.add("d-none");
    homeEl.classList.add("d-none");
};