import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PageSelectorProps {
  pages?: string[];
  onDone?: (selectedPages: string[]) => void;
}

export function PageSelector({
  pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'],
  onDone
}: PageSelectorProps) {
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());

  const handleAllPagesToggle = (checked: boolean) => {
    setAllPagesChecked(checked);
    if (checked) {
      setSelectedPages(new Set(pages));
    } else {
      setSelectedPages(new Set());
    }
  };

  const handlePageToggle = (page: string, checked: boolean) => {
    const newSelected = new Set(selectedPages);
    if (checked) {
      newSelected.add(page);
    } else {
      newSelected.delete(page);
    }
    setSelectedPages(newSelected);
    setAllPagesChecked(newSelected.size === pages.length);
  };

  const handleDone = () => {
    onDone?.(Array.from(selectedPages));
  };

  return (
    <div className="w-[370px] rounded-[6px] border border-border-gray bg-white shadow-[0px_8px_15px_rgba(20,20,20,0.12),0px_0px_4px_rgba(20,20,20,0.10)] pt-2">
      {/* Header - All pages */}
      <div className="flex items-center justify-between px-[22px] py-3 h-[42px]">
        <span className="font-['Montserrat'] text-sm font-normal text-text-primary">All pages</span>
        <Checkbox
          checked={allPagesChecked}
          onCheckedChange={handleAllPagesToggle}
          className="h-[18px] w-[18px] rounded-[4px]"
        />
      </div>

      {/* Divider */}
      <div className="px-[15px]">
        <Separator className="bg-divider-gray h-[0.7px]" />
      </div>

      {/* Page list */}
      <div className="py-[10px]">
        {pages.map((page) => (
          <div
            key={page}
            className="flex items-center justify-between px-[21px] h-[41px]"
          >
            <span className="font-['Montserrat'] text-sm font-normal text-text-primary">{page}</span>
            <Checkbox
              checked={selectedPages.has(page)}
              onCheckedChange={(checked) => handlePageToggle(page, checked as boolean)}
              className="h-[18px] w-[18px] rounded-[4px]"
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="px-[15px]">
        <Separator className="bg-divider-gray h-[0.7px]" />
      </div>

      {/* Done button */}
      <div className="px-[15px] py-[21px]">
        <Button
          onClick={handleDone}
          className="w-full h-[38px] bg-button-yellow hover:bg-button-yellow-hover text-text-primary font-['Montserrat'] text-sm font-normal rounded-[6px]"
        >
          Done
        </Button>
      </div>
    </div>
  );
}