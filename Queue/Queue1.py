class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Queue:

    def __init__(self):
        self.first = None
        self.iCount = 0

    def Enqueue(self,no):

        newn = Node(no)

        if(self.first == None):
            self.first = newn

        else:
            
            temp = self.first

            while(temp.next != None):
                temp = temp.next


            temp.next = newn

    
        self.iCount = self.iCount + 1

    def Dequeue(self):
        
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
            print("| ",temp.data," |",end="")
            temp = temp.next

        print()

    def Count(self):
        return self.iCount
    

    def Peek(self):
        temp = self.first

        iValue = 0

        if(temp == None):
            print("Queue is empty")
            return -1
        

        iValue = temp.data

        return iValue


def main():

    sobj = Queue()

    sobj.Enqueue(101)
    sobj.Enqueue(51)
    sobj.Enqueue(21)
    sobj.Enqueue(11)

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    sobj.Dequeue()

    print("Elements of Linked List are :")
    sobj.Display()

    print("Number of Elements in Linekd List are :",sobj.Count())

    print("Top Element from Queue is  :",sobj.Peek())

    
if __name__ == "__main__":
    main()