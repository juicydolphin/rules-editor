namespace RulesEditor;

public class DateRule
{
    public DateTime Date { get; set; }
    public int Days { get; set; }
}

public class DateComparisonRule
{
    public DateTime Date1 { get; set; }
    public DateTime Date2 { get; set; }
}

public class IntRule
{
    public int Value { get; set; }
}