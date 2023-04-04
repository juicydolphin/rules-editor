namespace RulesEditor;

public class MathRule
{
    public string RuleType { get; set; }
    public double Result { get; set; }
    public int UserId { get; set; }
}

public class AdditionRule : MathRule
{
    public double Number1 { get; set; }
    public double Number2 { get; set; }
}

public class SubtractionRule : MathRule
{
    public double Number1 { get; set; }
    public double Number2 { get; set; }
}

public class MultiplicationRule : MathRule
{
    public double Number1 { get; set; }
    public double Number2 { get; set; }
}

public class DivisionRule : MathRule
{
    public double Number1 { get; set; }
    public double Number2 { get; set; }
}

public class MaxRule : MathRule
{
    public List<double> Numbers { get; set; }
}
public class MinRule : MathRule
{
    public List<double> Numbers { get; set; }
}
public class RoundRule : MathRule
{
    public double Number { get; set; }
    public int Decimals { get; set; }
}
