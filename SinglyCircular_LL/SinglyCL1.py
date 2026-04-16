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
        pass

    def DeleteLast(self):
        pass

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

    def InsertAtPosFirst(self,no,pos):
        pass


    def DeleteAtPos(self,pos):
        pass


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

if __name__ == "__main__":
    main()