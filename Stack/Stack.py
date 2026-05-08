class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Stack:

    def __init__(self):
        self.first = None
        self.iCount = 0

    def Push(self,no):
       
        newn = Node(no)

        if(self.first == None):
            self.first = newn

        else:
            newn.next = self.first
            self.first = newn

    
        self.iCount = self.iCount + 1

    def Pop(self):
        
        temp = None

        if(self.first == None):
            return
        
        elif(self.first.next == None):
            
            self.first = None
            del self.first
        
        else:
            temp = self.first

        self.first = self.first.next


        self.iCount = self.iCount - 1

    def Display(self):
        temp = self.first

        while(temp != None):
            print("| ",temp.data," |\n",end="")
            temp = temp.next

        print()

    def Count(self):
        return self.iCount
    

    def Peep(self):
        temp = self.first

        iValue = 0

        if(temp == None):
            print("Stack is empty")
            return -1
        

        iValue = temp.data

        return iValue


def main():

    sobj = Stack()

    sobj.Push(101)
    sobj.Push(51)
    sobj.Push(21)
    sobj.Push(11)

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.Pop()

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    print("Top Element from Stack is  :",sobj.Peep())

    
if __name__ == "__main__":
    main()