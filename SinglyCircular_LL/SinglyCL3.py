class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class SinglyCL:
    def __init__(self):
        self.first = None
        self.last = None
        self.iCount = 0

    def InsertFirst(self,no):
       
        newn = Node(no)

        if((self.first == None) and (self.last == None)):

            self.first = newn
            self.last = newn

        else:
            newn.next = self.first
            self.first = newn


        self.last.next = self.first
        self.iCount = self.iCount + 1

    def InsertLast(self,no):

        newn = Node(no)

        if((self.first == None) and (self.last == None) ):

            self.first = newn
            self.last = newn

        else:
            
            self.last.next = newn
            self.last = newn


        self.last.next = self.first
        self.iCount = self.iCount + 1

    def DeleteFirst(self):
        
        temp = None

        if((self.first == None) and (self.last == None)):
            return
        
        elif(self.first == self.last):
            
            self.first = None
            self.last = None

            del self.first
            del self.last
        
        else:
            temp = self.first

        self.first = self.first.next

        self.last.next = self.first
        self.iCount = self.iCount - 1

    def DeleteLast(self):
        
        temp = None

        if((self.first == None) and (self.last == None)):
            return
        
        elif(self.first == self.last):
            
            self.first = None
            self.last = None

            del self.first
            del self.last
        
        else:
            
            temp = self.first

            while(temp.next != self.last):
                temp = temp.next

            
            del self.last
            self.last = temp

        self.last.next = self.first
        self.iCount = self.iCount - 1

    def Display(self):

        if self.first is None:
            print("Linked List is empty")
            return
        
        temp = self.first

        while True:
            print("| ", temp.data, " |->", end=" ")
            temp = temp.next

            if temp == self.last.next:
                break

        print()

    def Count(self):
        return self.iCount

    def InsertAtPos(self,no,pos):
        
        newn = None

        newn = Node(no)

        newn.data = no
        newn.next = None

        if(pos < 1 or pos > self.iCount + 1):
            print("Invalid Position")
            return
        
        if(pos == 1):
            self.InsertFirst(no)

        elif(pos == self.iCount + 1):
            self.InsertLast(no)
        
        else:

            temp = self.first

            for i in range(pos - 1):
                temp = temp.next

            newn.next = temp.next

            temp.next = newn

            self.iCount = self.iCount + 1
        

    def DeleteAtPos(self,pos):
    

        if(pos < 1 or pos > self.iCount):
            print("Invalid Position")
            return
        
        if(pos == 1):
            self.DeleteFirst()

        elif(pos == self.iCount):
            self.DeleteLast()
        
        else:

            temp = self.first
            
            for i in range(pos - 1):
                temp = temp.next

            target = temp.next

            temp.next = target.next

            del target

            self.iCount = self.iCount - 1


def main():

    sobj = SinglyCL()

    sobj.InsertFirst(101)
    sobj.InsertFirst(51)
    sobj.InsertFirst(21)
    sobj.InsertFirst(11)

    print("Elements of Linked List are :")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.iCount)

    print()

    sobj.InsertLast(101)
    sobj.InsertLast(111)

    print("Elements of Linked List are :")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.iCount)

    print()

    sobj.DeleteFirst()

    print("Elements of Linked List are :")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.Count())

    print()

    sobj.DeleteLast()

    print("Elements of Linked List are :")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.Count())

    print()

    sobj.InsertAtPos(75,4)

    print("Elements of Linked List are :\n")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.Count())

    print()

    sobj.DeleteAtPos(3)

    print("Elements of Linked List are :\n")

    sobj.Display()
    print("Number of Elements in Linekd List are :",sobj.Count())

    print()

if __name__ == "__main__":
    main()