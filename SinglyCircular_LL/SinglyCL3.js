class Node
{   
    constructor(no)
    {
        this.data = no;
        this.next = null;
    }
}

class SinglyCL
{
    constructor()
    {
        console.log("Object of singlyCL linked list gets created :")
        this.first = null;
        this.last = null;
        this.iCount = 0;
    }

    InsertFirst(no)
    {
        let newn = null;

        newn = new Node(no);

        if((this.first == null) && (this.last == null))
        {
            this.first = newn;
            this.last = newn;
        }
        else
        {
            newn.next = this.first;
            this.first = newn;
        }

        this.last.next = this.first;
        this.iCount++;
    }
    InsertLast(no)
    {
        let newn = null;
        let temp = null;

        newn = new Node(no);

        if((this.first == null) && (this.last == null))
        {
            this.first = newn;
            this.last = newn;
        }
        else
        {
            this.last.next = newn;

            this.last = newn;
        }

        this.last.next = this.first;
        this.iCount++;
    }

    DeleteFirst()
    {
        let temp = null;

        if((this.first == null) && (this.last == null))
        {
            return;
        }
        else if(this.first == this.last)
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            temp = this.first;

            this.first = this.first.next;
        }

        this.last.next = this.first;
        this.iCount--;
    }

    DeleteLast()
    {
        let temp = null;

        if((this.first == null) && (this.last == null))
        {
            return;
        }
        else if(this.first == this.last)
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            temp = this.first;

            while(temp.next != this.last)
            {
                temp = temp.next;
            }

            this.last = temp;
        }
        
        this.last.next = this.first;
        this.iCount--;
    }
    Display()
    {
        let temp = null;

        temp = this.first;

        do
        {
            process.stdout.write("| " + temp.data + " |->");
            temp = temp.next;

        }while(temp != this.last.next);

        console.log("");
    }
    Count()
    {
        return this.iCount;
    }
    InsertAtPos(no,pos)
    {

    }
    DeleteAtPos(pos)
    {

    }InsertAtPos(no,pos)
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

            temp.next = newn;

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

            this.iCount--;
        }
    }
}

function main()
{
    let obj = new SinglyCL();

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