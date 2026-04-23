class Node
{
    constructor(no)
    {
        this.data = no;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL3
{
    constructor()
    {
        console.log("Object of DoublyLL1 gets created :");
        this.first = null;
        this.iCount = 0;
    }

    InsertFirst(no)
    {
        let newn = null;

        newn = new Node(no);

        if(this.first == null)
        {
            this.first = newn;
             
        }
        else
        {
            newn.next = this.first;
            this.first.prev = newn;

            this.first = newn;
        }

        this.iCount++;
    }
    InsertLast(no)
    {
        let newn = null;
        let temp = null;

        newn = new Node(no);

        if(this.first == null)
        {
            this.first = newn;
        }
        else
        {
            temp = this.first;
            
            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newn;
            newn.prev = temp;
        }

        this.iCount++;
    }
    DeleteFirst()
    {
        let temp = null;

        if(this.first == null)
        {
            return;
        }
        else if(this.first.next == null)
        {
            this.first = null;
        }
        else
        {
            temp = this.first;

            this.first = this.first.next;
        }
        this.iCount--;
    }

    DeleteLast()
    {
        let temp = null;

        if(this.first == null)
        {
            return;
        }
        else if(this.first.next == null)
        {
            this.first = null;
        }
        else
        {
            temp = this.first;

            while(temp.next.next != null)
            {
                temp = temp.next;
            }
            temp.next = null;
        }
        this.iCount--;
    }
    Display()
    {
        let temp = null;

        temp = this.first;

        while (temp != null) 
        {
            process.stdout.write("| " + temp.data + " |->");
            temp = temp.next;
        }
        console.log("null");
    }
    Count()
    {
        return this.iCount;
    }
    InsertAtPos(no,pos)
    {   
        let newn = null;
        let temp = null;

        let iCnt = 0;

        newn = new Node(no);

        newn.data = no;
        newn.next = null;

        if(pos < 1 || pos > this.iCount + 1)
        {
            console.log("Invalid Position:");
            return;
        }

        if(pos == 1)
        {
            this.InsertFirst(no);
        }
        else if(pos == this.iCount + 1)
        {
            this.InsertLast(no);
        }
        else
        {   
            temp = this.first;

            for(iCnt = 1;iCnt < pos - 1;iCnt++)
            {
                temp = temp.next;
            }

            newn.next = temp.next;

            temp.next.prev = newn;

            temp.next = newn;

            newn.prev = temp;

            this.iCount++;
        }


    }
    DeleteAtPos(pos)
    {
        let temp = null;

        let iCnt = 0;

        if(pos < 1 || pos > this.iCount)
        {
            console.log("Invalid Position:");
            return;
        }

        if(pos == 1)
        {
            this.DeleteFirst(no);
        }
        else if(pos == this.iCount)
        {
            this.DeleteLast(no);
        }
        else
        {   
            temp = this.first;
            
            for(iCnt = 1;iCnt < pos - 1;iCnt++)
            {
                temp = temp.next;
            }

            temp.next = temp.next.next;

            temp.next.next.prev = temp;

            this.iCount--;
        }
    }
}

function main()
{
    let obj = new DoublyLL3();

    iRet = 0;

    obj.InsertFirst(51);
    obj.InsertFirst(41);
    obj.InsertFirst(31);
    obj.InsertFirst(21);
    obj.InsertFirst(11);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.InsertLast(101);
    obj.InsertLast(111);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.DeleteFirst();

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.DeleteLast();

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.InsertAtPos(113, 3);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.DeleteAtPos(2);

   obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

}
main();