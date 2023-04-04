using System.ComponentModel.DataAnnotations;

namespace RulesEditor;

public class TextRule
{
    public string OriginalString { get; set; }
}

public class SubstringRule : TextRule
{
    public int StartIndex { get; set; }

    public int Length { get; set; }
}

public class FormatRule : TextRule
{
    public string FormatString { get; set; }

    public object[] Arguments { get; set; }
}

public class ToLowerRule : TextRule
{
}

public class ToUpperRule : TextRule
{
}

public class ReplaceRule : TextRule
{
    public string OldValue { get; set; }

    public string NewValue { get; set; }
}