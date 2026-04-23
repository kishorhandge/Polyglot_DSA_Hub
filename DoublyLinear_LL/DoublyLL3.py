class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLL3:
    def __init__(self):
        self.first = None
        self.iCount = 0

    def InsertFirst(self,no):

        newn = Node(no)

        if(self.first == None):
            self.first = newn

        else:
            newn.next = self.first

            self.first.prev = newn
            self.first = newn


        self.iCount = self.iCount + 1


    def InsertLast(self,no):

        newn = Node(no)

        if(self.first == None):
            self.first = newn

        else:
            
            temp = self.first

            while(temp.next != None):
                temp = temp.next


            temp.next = newn

            newn.prev = temp


        self.iCount = self.iCount + 1


    def DeleteFirst(self):
        
        temp = None

        temp = self.first

        if(self.first == None):
            return

        elif (self.first.next == None):
            self.first = None

        else:

            temp = self.first

            self.first = self.first.next

        self.iCount = self.iCount - 1

    def DeleteLast(self):
        
        temp = None

        if(self.first == None):
            return
        
        elif(self.first.next == None):
            
            self.first = None
            del self.first
        
        else:
            
            temp = self.first

            while(temp.next != None):
                temp = temp.next

            
            del temp.next
            temp.next = None

        self.iCount = self.iCount - 1

    def Display(self):
        temp = self.first

        while(temp != None):
            print("| ",temp.data," |->",end=" ")
            temp = temp.next

        print("None")

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

            temp.next.prev = newn

            temp.next = newn

            newn.prev = temp

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

            target.next.prev = temp

            del target

            self.iCount = self.iCount - 1


def main():

    sobj = DoublyLL3()

    sobj.InsertFirst(101)
    sobj.InsertFirst(51)
    sobj.InsertFirst(21)
    sobj.InsertFirst(11)

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.InsertLast(101)
    sobj.InsertLast(111)

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.DeleteFirst()

    print("Elements of Linked List are :\n")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.DeleteLast()

    print("Elements of Linked List are :\n")

    sobj.Display()

    sobj.InsertAtPos(75,4)

    print("Elements of Linked List are :\n")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.DeleteAtPos(3)

    print("Elements of Linked List are :\n")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

if __name__ == "__main__":
    main()
